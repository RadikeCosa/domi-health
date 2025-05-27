import AddPatientForm from "@/components/addPatientForm";

export default function AdminPage() {
  return (
    <div className=" p-4 bg-white rounded-md">
      <h1 className="text-3xl font-bold p-2 ">Admin Dashboard</h1>
      <AddPatientForm />
    </div>
  );
}
