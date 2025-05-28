import AddPatientForm from "@/components/addPatientForm";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddPatientForm />

      <Link href="/">Go to Home</Link>
      <Link href="/patient">Go to Patient List</Link>
    </div>
  );
}
