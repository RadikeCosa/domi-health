// src/components/addPatientForm.tsx (ACTUALIZADO)
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
import Button from "./button";

const initialState: State = {
  success: false,
  message: "",
};

export default function AddPatientForm() {
  const [state, formAction] = useActionState(addPatient, initialState);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Add New Patient
      </h2>

      <form
        action={(formData) => startTransition(() => formAction(formData))}
        ref={formRef}
        className="space-y-6"
      >
        <InputField
          label="Patient Name"
          id="name"
          name="name"
          placeholder="Enter patient's full name"
          disabled={isPending}
          errorMessage={showMessage && !state.success ? state.message : ""}
          success={state.success}
        />

        {showMessage && state.success && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  {state.message}
                </p>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Adding Patient..." : "Add Patient"}
        </Button>
      </form>
    </div>
  );
}
