// src/app/patient/page.tsx
import PatientList from "@/components/patientList";
import { getPatients } from "@/lib/actions";
import Link from "next/link";

export default async function PatientPage() {
  const patients = await getPatients();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Patient List</h1>
        <Link
          href="/admin"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Admin Dashboard
        </Link>
      </div>

      <PatientList patients={patients} />

      {patients.length === 0 && (
        <div className="text-center mt-8">
          <Link
            href="/admin"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Add your first patient
          </Link>
        </div>
      )}
    </div>
  );
}
