import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "./globals.css";
import StoreProvider from "./StoreProvider";
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
      <StoreProvider>
        <body
          className={`${roboto.className} ${poppins.variable} overflow-hidden`}
        >
          {children}
          <ModalProvider />
        </body>
      </StoreProvider>
    </html>
  );
}
