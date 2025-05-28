// src/components/patientList.tsx
import Link from "next/link";
import { Patient } from "@/lib/actions";

interface PatientListProps {
  patients: Patient[];
}

export default function PatientList({ patients }: PatientListProps) {
  if (patients.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No patients found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {patients.map((patient) => (
        <Link
          key={patient.id}
          href={`/patient/${patient.id}`}
          className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              {patient.name}
            </h3>
            <span className="text-sm text-gray-500">
              {new Date(patient.created_at).toLocaleDateString()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
