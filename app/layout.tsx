import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "@/styles/globals.css";
import StoreProvider from "./StoreProvider";

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
      <body className={`${roboto.className} ${poppins.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
