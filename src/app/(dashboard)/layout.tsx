// 3. src/app/(dashboard)/layout.tsx (Layout CON sidebar para rutas agrupadas)
import DashboardLayout from "@/components/dashboardLayout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DashboardLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
