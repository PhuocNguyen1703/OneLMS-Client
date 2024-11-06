import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col max-h-screen">
      <Header />
      {/* <section className="grid grid-cols-[auto,1fr] overflow-auto">
        <Sidebar />
        <div className="bg-slate-300">{children}</div>
      </section> */}
    </main>
  );
}
