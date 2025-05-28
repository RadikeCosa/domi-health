// src/app/admin/page.tsx (ACTUALIZADO)
import AddPatientForm from "@/components/addPatientForm";
import PageHeader from "@/components/pageHeader";
import Card from "@/components/card";

export default function AdminPage() {
  return (
    <div>
      <PageHeader
        title="Admin Dashboard"
        subtitle="Manage your healthcare system"
      />

      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <AddPatientForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
