import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <Header />
      <section className="flex h-content shrink-0">
        <Sidebar />
        {children}
      </section>
    </main>
  );
}
