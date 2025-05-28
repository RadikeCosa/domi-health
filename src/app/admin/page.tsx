import AddPatientForm from "@/components/addPatientForm";
import PatientList from "@/components/patientList";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddPatientForm />
      <PatientList />
      <Link href="/">Go to Home</Link>
    </div>
  );
}
