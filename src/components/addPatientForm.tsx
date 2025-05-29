// src/components/addPatientForm.tsx
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
import SelectField from "./selectField";
import Button from "./button";
import {
  SEXO_OPTIONS,
  CIUDAD_OPTIONS,
  FINANCIADOR_OPTIONS,
  ESTADO_CIVIL_OPTIONS,
} from "@/schemas/patientSchema";

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
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Agregar Nuevo Paciente
      </h2>

      <form
        action={(formData) => startTransition(() => formAction(formData))}
        ref={formRef}
        className="space-y-8"
      >
        {/* Datos Personales */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Datos Personales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Nombre Completo"
              id="name"
              name="name"
              placeholder="ej. Juan Pérez"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.name
                  ? state.fieldErrors.name
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="DNI"
              id="dni"
              name="dni"
              type="number"
              placeholder="ej. 12345678"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.dni
                  ? state.fieldErrors.dni
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Fecha de Nacimiento"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              type="date"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.fecha_nacimiento
                  ? state.fieldErrors.fecha_nacimiento
                  : ""
              }
              success={state.success}
            />

            <SelectField
              label="Sexo"
              id="sexo"
              name="sexo"
              options={SEXO_OPTIONS}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.sexo
                  ? state.fieldErrors.sexo
                  : ""
              }
              success={state.success}
            />

            <SelectField
              label="Estado Civil"
              id="estado_civil"
              name="estado_civil"
              options={ESTADO_CIVIL_OPTIONS}
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.estado_civil
                  ? state.fieldErrors.estado_civil
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Ocupación"
              id="ocupacion"
              name="ocupacion"
              placeholder="ej. Profesor"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.ocupacion
                  ? state.fieldErrors.ocupacion
                  : ""
              }
              success={state.success}
            />
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información de Contacto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Teléfono Principal"
              id="telefono_principal"
              name="telefono_principal"
              type="tel"
              placeholder="ej. 2994123456"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.telefono_principal
                  ? state.fieldErrors.telefono_principal
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Teléfono Alternativo"
              id="telefono_alternativo"
              name="telefono_alternativo"
              type="tel"
              placeholder="ej. 2994654321"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.telefono_alternativo
                  ? state.fieldErrors.telefono_alternativo
                  : ""
              }
              success={state.success}
            />

            <div className="md:col-span-2">
              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="ej. juan@email.com"
                required={false}
                disabled={isPending}
                errorMessage={
                  showMessage && state.fieldErrors?.email
                    ? state.fieldErrors.email
                    : ""
                }
                success={state.success}
              />
            </div>
          </div>
        </div>

        {/* Dirección */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Dirección</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="Calle"
              id="calle"
              name="calle"
              placeholder="ej. Av. Argentina"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.calle
                  ? state.fieldErrors.calle
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Número"
              id="numero"
              name="numero"
              placeholder="ej. 1234"
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.numero
                  ? state.fieldErrors.numero
                  : ""
              }
              success={state.success}
            />

            <SelectField
              label="Ciudad"
              id="ciudad"
              name="ciudad"
              options={CIUDAD_OPTIONS}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.ciudad
                  ? state.fieldErrors.ciudad
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Código Postal"
              id="codigo_postal"
              name="codigo_postal"
              placeholder="ej. 8300"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.codigo_postal
                  ? state.fieldErrors.codigo_postal
                  : ""
              }
              success={state.success}
            />
          </div>
        </div>

        {/* Información Médica */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información Médica y Administrativa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField
              label="Financiador"
              id="financiador"
              name="financiador"
              options={FINANCIADOR_OPTIONS}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.financiador
                  ? state.fieldErrors.financiador
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Número de Afiliado"
              id="numero_afiliado"
              name="numero_afiliado"
              placeholder="ej. 123456789"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.numero_afiliado
                  ? state.fieldErrors.numero_afiliado
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Médico Derivante"
              id="medico_derivante"
              name="medico_derivante"
              placeholder="ej. Dr. García"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.medico_derivante
                  ? state.fieldErrors.medico_derivante
                  : ""
              }
              success={state.success}
            />

            <div className="md:col-span-2">
              <label
                htmlFor="motivo_consulta"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Motivo de Consulta
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="motivo_consulta"
                name="motivo_consulta"
                rows={3}
                placeholder="Describa el motivo de la consulta..."
                disabled={isPending}
                className={`block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed resize-none ${
                  showMessage && state.fieldErrors?.motivo_consulta
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : state.success
                    ? "border-green-300 focus:border-green-500 focus:ring-green-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
              {showMessage && state.fieldErrors?.motivo_consulta && (
                <p className="mt-2 text-sm text-red-600">
                  {state.fieldErrors.motivo_consulta}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contacto de Emergencia */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Contacto de Emergencia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Nombre del Contacto"
              id="contacto_emergencia_nombre"
              name="contacto_emergencia_nombre"
              placeholder="ej. María Pérez"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.contacto_emergencia_nombre
                  ? state.fieldErrors.contacto_emergencia_nombre
                  : ""
              }
              success={state.success}
            />

            <InputField
              label="Teléfono del Contacto"
              id="contacto_emergencia_telefono"
              name="contacto_emergencia_telefono"
              type="tel"
              placeholder="ej. 2994987654"
              required={false}
              disabled={isPending}
              errorMessage={
                showMessage && state.fieldErrors?.contacto_emergencia_telefono
                  ? state.fieldErrors.contacto_emergencia_telefono
                  : ""
              }
              success={state.success}
            />
          </div>
        </div>

        {/* Observaciones */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Observaciones Adicionales
          </h3>
          <div>
            <label
              htmlFor="observaciones"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Observaciones
            </label>
            <textarea
              id="observaciones"
              name="observaciones"
              rows={4}
              placeholder="Cualquier información adicional relevante..."
              disabled={isPending}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
            />
          </div>
        </div>

        {/* Mensaje de éxito */}
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

        {/* Mensaje de error general */}
        {showMessage && !state.success && state.message && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                  {state.message}
                </p>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Agregando Paciente..." : "Agregar Paciente"}
        </Button>
      </form>
    </div>
  );
}
