// src/components/inputField.tsx (ACTUALIZADO)
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
  required = true,
  disabled = false,
  errorMessage,
  success = false,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        className={`block w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
          errorMessage
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : success
            ? "border-green-300 focus:border-green-500 focus:ring-green-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`}
      />
      {errorMessage && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-sm text-red-600"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
