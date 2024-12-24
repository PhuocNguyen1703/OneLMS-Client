import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "./globals.css";
import { ModalProvider } from "@/components/modal";

export const metadata: Metadata = {
  title: "OneLMS service",
  description: "OneLMS service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.variable} overflow-hidden`}
      >
        {children}
        <ModalProvider />
      </body>
    </html>
  );
}
