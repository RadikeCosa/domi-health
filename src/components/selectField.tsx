// src/components/selectField.tsx
import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  id: string;
  name: string;
  options: readonly Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  success?: boolean;
  defaultValue?: string;
};

export default function SelectField({
  label,
  id,
  name,
  options,
  placeholder = "Seleccionar...",
  required = true,
  disabled = false,
  errorMessage,
  success = false,
  defaultValue = "",
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        defaultValue={defaultValue}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        className={`block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
          errorMessage
            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
            : success
            ? "border-green-300 focus:border-green-500 focus:ring-green-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
