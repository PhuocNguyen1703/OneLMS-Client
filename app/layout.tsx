import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "@/styles/globals.css";
import StoreProvider from "./StoreProvider";
import { ModalProvider } from "@/components/Modal";

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
        <body className={`${roboto.className} ${poppins.variable}`}>
          {children}
          <ModalProvider />
        </body>
      </StoreProvider>
    </html>
  );
}
