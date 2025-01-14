import Header from "@/components/layouts/header/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="grid grid-cols-[auto,1fr] grow overflow-auto">
        <div className="overflow-x-hidden">{children}</div>
      </section>
    </main>
  );
}
