// src/app/patient/[patient]/page.tsx (ACTUALIZADO)
import { getPatientById } from "@/lib/actions";
import { notFound } from "next/navigation";
import PageHeader from "@/components/pageHeader";
import PatientBasicInfo from "@/components/patientBasicInfo";
import PatientContactInfo from "@/components/patientContactInfo";
import PatientMedicalInfo from "@/components/patientMedicalInfo";
import Card from "@/components/card";

interface PatientDetailProps {
  params: Promise<{
    patient: string;
  }>;
}

export default async function PatientDetailPage({
  params,
}: PatientDetailProps) {
  const resolvedParams = await params;
  const patientId = resolvedParams.patient;

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
    <div>
      <PageHeader title={patient.name} subtitle="Información del Paciente">
        <div className="flex gap-2"></div>
      </PageHeader>

      <div className="p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Información Básica */}
          <PatientBasicInfo patient={patient} />

          {/* Información de Contacto */}
          <PatientContactInfo patient={patient} />

          {/* Información Médica */}
          <PatientMedicalInfo patient={patient} />

          {/* Historial Médico - Placeholder */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Historial Médico
            </h2>
            <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-gray-400 mb-2">
                <svg
                  className="mx-auto h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                El historial médico y los registros estarán disponibles aquí
                próximamente.
              </p>
            </div>
          </Card>

          {/* Citas - Placeholder */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Citas y Turnos
            </h2>
            <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="text-gray-400 mb-2">
                <svg
                  className="mx-auto h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                La gestión de citas y turnos estará disponible aquí
                próximamente.
              </p>
            </div>
          </Card>

          {/* ID del Paciente para desarrolladores */}
          <Card className="p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  ID del Paciente (Para desarrolladores)
                </label>
                <p className="text-xs text-gray-600 font-mono">{patient.id}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
