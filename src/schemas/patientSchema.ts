// src/schemas/patientSchema.ts
import { z } from "zod/v4";

export const patientSchema = z.object({
  name: z.string().min(1, "Name is required"),
});
