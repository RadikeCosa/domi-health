// src/components/InputField.tsx
import React from "react";

type InputFieldProps = {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  success?: boolean;
};

export default function InputField({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
  errorMessage,
}: /* success = false, */
InputFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-describedby={`${id}-error`}
      />
      {errorMessage && (
        <p id={`${id}-error`} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
