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
      className="w-full max-w-md mx-auto flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <fieldset>
        <legend className="mb-4 text-xl font-semibold text-gray-800">
          Add New Patient
        </legend>

        <InputField
          label="Name:"
          id="name"
          name="name"
          placeholder="Robertino Capuchino"
          disabled={isPending}
          errorMessage={showMessage ? state.message : ""}
          success={state.success}
        />
      </fieldset>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? "Adding..." : "Add Patient"}
      </button>
    </form>
  );
}
