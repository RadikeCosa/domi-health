"use client";

import { useActionState } from "react";
import { addPatient } from "@/actions/addPatientAction";

const initialState = {
  success: false,
  message: "",
};

export default function AddPatientForm() {
  const [state, formAction] = useActionState(addPatient, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-md border border-gray-200 p-6 shadow"
    >
      <legend className="mb-4 text-lg font-semibold">Add New Patient</legend>

      <div>
        <label className="mb-2 text-sm font-medium" htmlFor="name">
          Name:
        </label>
        <input
          className="peer w-50 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          type="text"
          id="name"
          name="name"
        />
      </div>

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-500"
          }`}
        >
          {state.message}
        </p>
      )}

      <button className="w-fit rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Add Patient
      </button>
    </form>
  );
}
