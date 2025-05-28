// src/app/patient/[patient]/page.tsx
import { getPatientById } from "@/lib/actions";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PatientDetailProps {
  params: {
    patient: string;
  };
}

export default async function PatientDetailPage({
  params,
}: PatientDetailProps) {
  const patientId = params.patient;

  // Validar que el ID sea un UUID válido (opcional)
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(patientId)) {
    notFound();
  }

  const patient = await getPatientById(patientId);

  if (!patient) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/patient"
          className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
        >
          ← Back to Patient List
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Patient Details
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <p className="text-lg text-gray-900">{patient.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID
            </label>
            <p className="text-sm text-gray-600 font-mono">{patient.id}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Created At
            </label>
            <p className="text-sm text-gray-600">
              {new Date(patient.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Placeholder para futuras funciones */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            Additional patient information and actions will be added here in the
            future.
          </p>
        </div>
      </div>
    </div>
  );
}
