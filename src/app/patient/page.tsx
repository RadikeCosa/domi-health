import PatientList from "@/components/patientList";
import Link from "next/link";
export default function PatientPage() {
  return (
    <div>
      <h1>Patient List</h1>
      <PatientList />
      <Link href="/admin">Go to Admin Dashboard</Link>
    </div>
  );
}
