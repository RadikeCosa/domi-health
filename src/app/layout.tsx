// 1. src/app/layout.tsx (Root Layout - SIN sidebar)
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domi Health",
  description: "Solutions for managing healthcare data at home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
