import ImageSlide from "@/components/auth/ImageSlide";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex p-5 border rounded-lg bg-primary-foreground">
        <div className="rounded-lg">
          <ImageSlide />
        </div>
        {children}
      </div>
    </section>
  );
}
