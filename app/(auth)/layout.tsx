import ImageSlide from "@/features/auth/components/ImageSlide";
import Logo from "@/components/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex p-5 border rounded-lg bg-primary-foreground">
        <div className="rounded-lg">
          {/* <ImageSlide /> */}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-2 mt-6">
            <Logo width={50} height={50} />
            <p className="text-primary text-4xl font-bold select-none">
              OneLMS
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
