import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "@/styles/globals.css";
import StoreProvider from "./StoreProvider";
import Modal from "@/components/Modal/Modal";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental service",
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
        </body>
      </StoreProvider>
    </html>
  );
}
