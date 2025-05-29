// src/components/PatientBasicInfo.tsx
import { Patient, calculateAge } from "@/lib/actions";
import Card from "./card";

interface PatientBasicInfoProps {
  patient: Patient;
}

export default async function PatientBasicInfo({
  patient,
}: PatientBasicInfoProps) {
  const age = await calculateAge(patient.fecha_nacimiento);

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Información Básica
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Completo
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.name}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            DNI
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.dni}
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Nacimiento
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {new Date(patient.fecha_nacimiento).toLocaleDateString("es-AR")} (
            {age} años)
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sexo
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.sexo.charAt(0).toUpperCase() + patient.sexo.slice(1)}
          </p>
        </div>
        {patient.estado_civil && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estado Civil
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              {patient.estado_civil.charAt(0).toUpperCase() +
                patient.estado_civil.slice(1)}
            </p>
          </div>
        )}
        {patient.ocupacion && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ocupación
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              {patient.ocupacion}
            </p>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Registro
          </label>
          <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
            {new Date(patient.created_at).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </Card>
  );
}
