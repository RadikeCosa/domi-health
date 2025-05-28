// src/components/patientList.tsx (ACTUALIZADO)
import Link from "next/link";
import { Patient } from "@/lib/actions";
import Card from "./card";

interface PatientListProps {
  patients: Patient[];
}

export default function PatientList({ patients }: PatientListProps) {
  if (patients.length === 0) {
    return null; // El mensaje vacío se maneja en la página principal
  }

  return (
    <div className="space-y-3">
      {patients.map((patient) => (
        <Link key={patient.id} href={`/patient/${patient.id}`}>
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {patient.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Patient ID: {patient.id.slice(0, 8)}...
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Registered</p>
                <p className="text-sm font-medium text-gray-700">
                  {new Date(patient.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
