// src/app/page.tsx
import PageHeader from "@/components/pageHeader";
import Card from "@/components/card";
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Welcome to Domi Health"
        subtitle="Your comprehensive healthcare management solution"
      />

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <div className="mx-auto max-w-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Domi Health
              </h2>
              <p className="text-gray-600 mb-6">
                Manage your patients and healthcare data efficiently with our
                intuitive platform. We are currently working on expanding
                features.
              </p>
              <div className="space-y-3">
                <Link href="/patient" className="block">
                  <Button variant="primary" className="w-full">
                    View Patients
                  </Button>
                </Link>
                <Link href="/admin" className="block">
                  <Button variant="outline" className="w-full">
                    Admin Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  Assessments
                </div>
                <div className="text-sm text-gray-600">
                  Easy to use common assessments
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 hover:text-green-700">
                  <Link href="https://docs-domi-health.vercel.app/">
                    Documentation
                  </Link>
                </div>
                <div className="text-sm text-gray-600">Full Complete</div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Easy</div>
                <div className="text-sm text-gray-600">To Use Interface</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
