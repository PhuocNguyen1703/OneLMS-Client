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
        <section className="flex-col flex-1 overflow-hidden bg-secondary">
          <Header />
          <div className=" flex-1 bg-secondary overflow-auto">{children}</div>
        </section>
      </main>
      {/* <CheckToken /> */}
    </>
  );
}
