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
      <section className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-1.5">{children}</div>
      </section>
    </main>
  );
}
