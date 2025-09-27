import Header from "@/components/layouts/header/Header";
import Sidebar from "@/components/layouts/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex h-screen">
        <Sidebar />
        <section className="flex flex-col flex-1 overflow-hidden border border-l-accent bg-background">
          <Header />
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </section>
      </main>
      {/* <CheckToken /> */}
    </>
  );
}
