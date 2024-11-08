import Header from "@/components/layouts/header/Header";
import Sidebar from "@/components/layouts/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="grid grid-cols-[auto,1fr] grow overflow-auto">
        <Sidebar />
        <div className="bg-slate-300">{children}</div>
      </section>
    </main>
  );
}
