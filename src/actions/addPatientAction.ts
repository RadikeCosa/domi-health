"use server";

import { supabase } from "@/lib/supabase";

export async function addPatient(formData: FormData) {
  const name = formData.get("name") as string;

  await supabase.from("patients").insert({ name });
}
