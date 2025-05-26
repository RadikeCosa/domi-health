import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold p-3">Welcome to Domi Health</h1>
        <p className="font-bold p-2">
          Solutions for managing healthcare data at home
        </p>
        <p>We are currently working on this project. Stay tuned for updates!</p>
        <div className="mt-4">
          <Link href="/admin" className="text-blue-500 hover:underline">
            ir a Admin Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
