// src/app/patient/page.tsx (ACTUALIZADO)
import PatientList from "@/components/patientList";
import { getPatients } from "@/lib/actions";
import PageHeader from "@/components/pageHeader";
import Button from "@/components/button";
import Link from "next/link";

export default async function PatientPage() {
  const patients = await getPatients();

  return (
    <div>
      <PageHeader
        title="Patients"
        subtitle={`${patients.length} patient${
          patients.length !== 1 ? "s" : ""
        } registered`}
      >
        <Link href="/admin">
          <Button variant="primary">Add New Patient</Button>
        </Link>
      </PageHeader>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <PatientList patients={patients} />

          {patients.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No patients yet
              </h3>
              <p className="text-gray-600 mb-4">
                Get started by adding your first patient.
              </p>
              <Link href="/admin">
                <Button variant="primary">Add First Patient</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
