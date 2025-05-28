// src/lib/actions.ts
"use server";

import { supabase } from "@/lib/supabase";
import { patientSchema } from "@/schemas/patientSchema";
import { revalidatePath } from "next/cache";

// Tipo exportado para reusarlo en el componente cliente
export type State = {
  success: boolean;
  message: string;
};

// Tipo para Patient
export type Patient = {
  id: string;
  name: string;
  created_at: string;
};

/**
 * Adds a new patient to the database.
 * @param prevState - Previous state of the form (for useActionState).
 * @param formData - Form data containing the patient's name.
 * @returns A promise resolving to the state object with success status and message.
 */
export async function addPatient(
  prevState: State,
  formData: FormData
): Promise<State> {
  // Verificación inicial para evitar null/undefined
  const name = formData.get("name");
  if (!name) {
    return {
      success: false,
      message: "Name is required.",
    };
  }

  // Validación con Zod
  const result = patientSchema.safeParse({ name });
  if (!result.success) {
    return {
      success: false,
      message: result.error.issues[0].message,
    };
  }

  const { name: validName } = result.data;

  // Inserción en Supabase con manejo detallado de errores
  const { error } = await supabase.from("patients").insert({ name: validName });

  if (error) {
    // Mapear errores específicos de Supabase
    if (error.code === "23505") {
      return {
        success: false,
        message: "A patient with this name already exists.",
      };
    }
    return {
      success: false,
      message: `Database error: ${error.message}`,
    };
  }

  revalidatePath("/patient"); // Cambié a /patient para que coincida con tu ruta
  return {
    success: true,
    message: "Patient added successfully!",
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
