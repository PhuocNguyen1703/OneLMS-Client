import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <section className="w-[200px]">
        <Sidebar />
      </section>
      <section className="flex-1 bg-slate-400">navbar</section>
    </main>
  );
}
