"use server";

import { supabase } from "@/lib/supabase";
import { patientSchema } from "@/schemas/patientSchema";

type State = {
  success: boolean;
  message: string;
};

export async function addPatient(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const name = formData.get("name");

  const result = patientSchema.safeParse({ name });

  if (!result.success) {
    return {
      success: false,
      message: result.error.issues[0].message,
    };
  }

  const { name: validName } = result.data;

  const { error } = await supabase.from("patients").insert({ name: validName });

  if (error) {
    return {
      success: false,
      message: "Failed to save patient to the database.",
    };
  }

  return {
    success: true,
    message: "Patient added successfully!",
  };
}
