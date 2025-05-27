"use client";

import {
  useActionState,
  useTransition,
  useEffect,
  useState,
  useRef,
} from "react";
import { addPatient, State } from "@/lib/actions";
import InputField from "./inputField";

const initialState: State = {
  success: false,
  message: "",
};

export default function AddPatientForm() {
  const [state, formAction] = useActionState(addPatient, initialState);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  // Mostrar mensaje por 3 segundos
  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  // Resetear el formulario en caso de éxito
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <form
      action={(formData) => startTransition(() => formAction(formData))}
      ref={formRef}
      className="flex flex-col gap-4 rounded-md border border-gray-200 p-6 shadow"
    >
      <fieldset>
        <legend className="mb-4 text-lg font-semibold">Add New Patient</legend>

        <InputField
          label="Name:"
          id="name"
          name="name"
          placeholder="Enter patient name"
          disabled={isPending}
          errorMessage={showMessage ? state.message : ""}
          success={state.success}
        />
      </fieldset>

      <button
        type="submit"
        className="w-fit rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? "Adding..." : "Add Patient"}
      </button>
    </form>
  );
}
