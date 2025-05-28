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
    >
      <fieldset>
        <legend>Add New Patient</legend>

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

      <button type="submit">{isPending ? "Adding..." : "Add Patient"}</button>
    </form>
  );
}
