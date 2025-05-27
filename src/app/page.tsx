import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Domi Health
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Solutions for managing healthcare data at home
        </p>
        <p className="text-gray-500 mb-6">
          We are currently working on this project. Stay tuned for updates!
        </p>
        <Link
          href="/admin"
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Go to Admin Dashboard
        </Link>
      </main>
    </div>
  );
}
