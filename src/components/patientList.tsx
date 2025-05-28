import { getPatients } from "@/lib/actions";

export default async function PatientList() {
  const patients = await getPatients();

  return (
    <div>
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}
