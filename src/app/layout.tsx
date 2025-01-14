import type { Metadata } from "next";
import { poppins, roboto } from "@/utils/fonts";
import "./globals.css";
import { ModalProvider } from "@/components/modal";
import ThemeProvider from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} ${poppins.variable} overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
