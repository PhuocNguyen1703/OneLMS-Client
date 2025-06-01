import ImageSlide from "@/app/(auth)/_components/ImageSlide";
import Logo from "@/components/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex-center justify-center h-screen">
      <div className="flex p-5 border rounded-lg bg-primary-foreground">
        {/* <div className="rounded-lg">
          <ImageSlide />
        </div> */}
        <div className="flex flex-col w-[470px] p-10">
          <div className="flex-center justify-center gap-2 mb-10">
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
