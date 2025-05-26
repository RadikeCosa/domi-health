import AddPatientForm from "@/app/components/addPatientForm";

export default function AdminPage() {
  return (
    <div className=" p-4 bg-white rounded-md">
      <h1 className="text-2xl font-bold p-2 shadow-lg">Admin Dashboard</h1>
      <AddPatientForm />
    </div>
  );
}
