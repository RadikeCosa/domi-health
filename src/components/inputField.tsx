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
  success = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-describedby={`${id}-error`}
        className="peer w-50 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      {errorMessage && (
        <p
          id={`${id}-error`}
          className={`text-sm ${success ? "text-green-600" : "text-red-500"}`}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
