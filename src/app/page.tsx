import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Domi Health</h1>
        <p>Solutions for managing healthcare data at home</p>
        <p>We are currently working on this project. Stay tuned for updates!</p>
        <Link href="/admin">Go to Admin Dashboard</Link>
      </main>
    </div>
  );
}
