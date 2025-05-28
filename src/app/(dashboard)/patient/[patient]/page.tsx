// src/app/patient/[patient]/page.tsx (ACTUALIZADO)
import { getPatientById } from "@/lib/actions";
import { notFound } from "next/navigation";
import PageHeader from "@/components/pageHeader";
import Card from "@/components/card";
import Button from "@/components/button";
import Link from "next/link";

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
      <PageHeader title={patient.name} subtitle="Patient Information">
        <Link href="/patient">
          <Button variant="outline">← Back to Patients</Button>
        </Link>
      </PageHeader>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Patient Info Card */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
                  {patient.name}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient ID
                </label>
                <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-2 rounded-md">
                  {patient.id}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Date
                </label>
                <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
                  {new Date(patient.created_at).toLocaleDateString("en-US", {
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

          {/* Future Features Placeholder */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Medical Records
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
              <p className="text-sm text-gray-500">
                Medical records and history will be available here soon.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Appointments
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
              <p className="text-sm text-gray-500">
                Appointment scheduling will be available here soon.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
