import Sidebar from "@/src/components/layout/Sidebar";
import TopHeader from "@/src/components/layout/TopHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="ml-[260px] flex-1 p-8">
        <TopHeader />
        {children}
      </main>
    </div>
  );
}
