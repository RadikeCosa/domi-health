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
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
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
        className={`w-full rounded-lg border border-gray-300 py-2 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200 ${
          errorMessage && !success ? "border-red-500" : ""
        } ${success ? "border-green-500" : ""}`}
      />
      {errorMessage && (
        <p
          id={`${id}-error`}
          className={`text-xs font-medium ${
            success ? "text-green-600" : "text-red-600"
          } mt-1`}
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
