// src/schemas/patientSchema.ts
import { z } from "zod";

// Validación personalizada para DNI argentino
const dniSchema = z
  .string()
  .min(7, "DNI debe tener al menos 7 dígitos")
  .max(8, "DNI debe tener máximo 8 dígitos")
  .regex(/^\d+$/, "DNI debe contener solo números");

// Validación para teléfono argentino
const phoneSchema = z
  .string()
  .regex(
    /^(?:\+54\s?)?(?:11|2\d|3\d|4\d|5\d|6\d)\s?\d{4}\s?\d{4}$/,
    "Formato de teléfono inválido"
  );

// Validación para email opcional
const optionalEmailSchema = z
  .string()
  .email("Email inválido")
  .optional()
  .or(z.literal(""));

export const patientSchema = z.object({
  // Datos personales básicos
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  dni: dniSchema,
  fecha_nacimiento: z.string().min(1, "Fecha de nacimiento es requerida"),
  sexo: z.enum(["masculino", "femenino", "otro"], {
    message: "Sexo es requerido",
  }),

  // Contacto
  telefono_principal: phoneSchema,
  telefono_alternativo: z.string().optional().or(z.literal("")),
  email: optionalEmailSchema,

  // Dirección
  calle: z.string().min(1, "Calle es requerida"),
  numero: z.string().min(1, "Número es requerido"),
  ciudad: z.enum(["Neuquén", "Centenario", "Plottier", "Cipolletti"], {
    message: "Ciudad es requerida",
  }),
  codigo_postal: z.string().optional().or(z.literal("")),

  // Datos médicos/administrativos
  financiador: z.enum(["Swiss Medical", "OSDE", "ISSN", "Particular", "Otra"], {
    message: "Financiador es requerido",
  }),
  numero_afiliado: z.string().optional().or(z.literal("")),
  medico_derivante: z.string().optional().or(z.literal("")),
  motivo_consulta: z.string().min(1, "Motivo de consulta es requerido"),

  // Datos adicionales
  estado_civil: z
    .enum(["soltero", "casado", "divorciado", "viudo", "union_libre"])
    .optional()
    .or(z.literal("")),
  ocupacion: z.string().optional().or(z.literal("")),

  // Contacto de emergencia
  contacto_emergencia_nombre: z.string().optional().or(z.literal("")),
  contacto_emergencia_telefono: z.string().optional().or(z.literal("")),

  // Observaciones
  observaciones: z.string().optional().or(z.literal("")),
});

export type PatientInput = z.infer<typeof patientSchema>;

// Tipos para los selects
export const SEXO_OPTIONS = [
  { value: "masculino", label: "Masculino" },
  { value: "femenino", label: "Femenino" },
  { value: "otro", label: "Otro" },
] as const;

export const CIUDAD_OPTIONS = [
  { value: "Neuquén", label: "Neuquén" },
  { value: "Centenario", label: "Centenario" },
  { value: "Plottier", label: "Plottier" },
  { value: "Cipolletti", label: "Cipolletti" },
] as const;

export const FINANCIADOR_OPTIONS = [
  { value: "ISSN", label: "ISSN" },
  { value: "Swiss Medical", label: "Swiss Medical" },
  { value: "OSDE", label: "OSDE" },
  { value: "Particular", label: "Particular" },
  { value: "Otra", label: "Otra" },
] as const;

export const ESTADO_CIVIL_OPTIONS = [
  { value: "", label: "No especificado" },
  { value: "soltero", label: "Soltero/a" },
  { value: "casado", label: "Casado/a" },
  { value: "divorciado", label: "Divorciado/a" },
  { value: "viudo", label: "Viudo/a" },
  { value: "union_libre", label: "Unión libre" },
] as const;
