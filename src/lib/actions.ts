// src/lib/actions.ts
"use server";

import { supabase } from "@/lib/supabase";
import { patientSchema } from "@/schemas/patientSchema";
import { revalidatePath } from "next/cache";

// Tipo exportado para reusarlo en el componente cliente
export type State = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

// Tipo actualizado para Patient
export type Patient = {
  id: string;
  name: string;
  dni: string;
  fecha_nacimiento: string;
  sexo: string;
  telefono_principal: string;
  telefono_alternativo?: string;
  email?: string;
  calle: string;
  numero: string;
  ciudad: string;
  codigo_postal?: string;
  financiador: string;
  numero_afiliado?: string;
  medico_derivante?: string;
  motivo_consulta: string;
  estado_civil?: string;
  ocupacion?: string;
  contacto_emergencia_nombre?: string;
  contacto_emergencia_telefono?: string;
  observaciones?: string;
  created_at: string;
};

/**
 * Adds a new patient to the database.
 * @param prevState - Previous state of the form (for useActionState).
 * @param formData - Form data containing the patient's information.
 * @returns A promise resolving to the state object with success status and message.
 */
export async function addPatient(
  prevState: State,
  formData: FormData
): Promise<State> {
  // Convertir FormData a objeto
  const rawData = Object.fromEntries(formData.entries());

  // Limpiar campos vacíos convirtiéndolos a undefined
  const cleanedData = Object.entries(rawData).reduce((acc, [key, value]) => {
    acc[key] = value === "" ? undefined : value;
    return acc;
  }, {} as Record<string, FormDataEntryValue | undefined>);

  // Validación con Zod
  const result = patientSchema.safeParse(cleanedData);

  if (!result.success) {
    // Mapear errores de campo específicos
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      fieldErrors[field] = issue.message;
    });

    return {
      success: false,
      message: "Por favor, corrija los errores en el formulario.",
      fieldErrors,
    };
  }

  const validatedData = result.data;

  // Preparar datos para inserción (convertir campos vacíos a null)
  const insertData = {
    name: validatedData.name,
    dni: validatedData.dni,
    fecha_nacimiento: validatedData.fecha_nacimiento,
    sexo: validatedData.sexo,
    telefono_principal: validatedData.telefono_principal,
    telefono_alternativo: validatedData.telefono_alternativo || null,
    email: validatedData.email || null,
    calle: validatedData.calle,
    numero: validatedData.numero,
    ciudad: validatedData.ciudad,
    codigo_postal: validatedData.codigo_postal || null,
    financiador: validatedData.financiador,
    numero_afiliado: validatedData.numero_afiliado || null,
    medico_derivante: validatedData.medico_derivante || null,
    motivo_consulta: validatedData.motivo_consulta,
    estado_civil: validatedData.estado_civil || null,
    ocupacion: validatedData.ocupacion || null,
    contacto_emergencia_nombre:
      validatedData.contacto_emergencia_nombre || null,
    contacto_emergencia_telefono:
      validatedData.contacto_emergencia_telefono || null,
    observaciones: validatedData.observaciones || null,
  };

  // Inserción en Supabase con manejo detallado de errores
  const { error } = await supabase.from("patients").insert(insertData);

  if (error) {
    console.error("Supabase error:", error);

    // Mapear errores específicos de Supabase
    if (error.code === "23505") {
      if (error.message.includes("dni")) {
        return {
          success: false,
          message: "Ya existe un paciente con este DNI.",
          fieldErrors: { dni: "Este DNI ya está registrado." },
        };
      }
      return {
        success: false,
        message: "Ya existe un paciente con estos datos.",
      };
    }

    return {
      success: false,
      message: `Error de base de datos: ${error.message}`,
    };
  }

  revalidatePath("/patient");
  return {
    success: true,
    message: "¡Paciente agregado exitosamente!",
  };
}

/**
 * Fetches all patients from the database.
 * @returns A promise resolving to the list of patients.
 * @throws Error if fetching patients fails.
 */
export async function getPatients(): Promise<Patient[]> {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Error fetching patients: " + error.message);
  }

  return data || [];
}

/**
 * Fetches a single patient by ID.
 * @param id - Patient ID
 * @returns A promise resolving to the patient data or null if not found.
 */
export async function getPatientById(id: string): Promise<Patient | null> {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // No rows returned
      return null;
    }
    throw new Error("Error fetching patient: " + error.message);
  }

  return data;
}

/**
 * Calculates age from birth date
 * @param birthDate - Birth date string
 * @returns Age in years
 */
export async function calculateAge(birthDate: string): Promise<number> {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

/**
 * Formats address for Google Maps
 * @param patient - Patient data
 * @returns Formatted address string
 */
export async function formatAddressForMaps(patient: Patient): Promise<string> {
  return `${patient.calle} ${patient.numero}, ${patient.ciudad}, Neuquén, Argentina`;
}
