// src/components/PatientContactInfo.tsx
import { Patient, formatAddressForMaps } from "@/lib/actions";
import Card from "./card";

interface PatientContactInfoProps {
  patient: Patient;
}

export default async function PatientContactInfo({
  patient,
}: PatientContactInfoProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    await formatAddressForMaps(patient)
  )}`;

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Información de Contacto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teléfono Principal
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.telefono_principal}
          </p>
        </div>
        {patient.telefono_alternativo && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono Alternativo
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              {patient.telefono_alternativo}
            </p>
          </div>
        )}
        {patient.email && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              <a
                href={`mailto:${patient.email}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {patient.email}
              </a>
            </p>
          </div>
        )}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <div className="bg-gray-50 px-3 py-2 rounded-md">
            <p className="text-base text-gray-900 mb-2">
              {patient.calle} {patient.numero}, {patient.ciudad}
              {patient.codigo_postal && ` (${patient.codigo_postal})`}
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>
        {(patient.contacto_emergencia_nombre ||
          patient.contacto_emergencia_telefono) && (
          <div className="md:col-span-2 border-t pt-4">
            <h3 className="text-md font-medium text-gray-900 mb-3">
              Contacto de Emergencia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {patient.contacto_emergencia_nombre && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                    {patient.contacto_emergencia_nombre}
                  </p>
                </div>
              )}
              {patient.contacto_emergencia_telefono && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                    {patient.contacto_emergencia_telefono}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
