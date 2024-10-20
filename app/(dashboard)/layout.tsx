import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-1 bg-primary-foreground">
        <Header />
        {children}
      </section>
    </main>
  );
}
