import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { poppins, roboto } from "@/utils/fonts";
import "./globals.css";
import { ModalProvider } from "@/components/modal";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "OneLMS service",
  description: "OneLMS service",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${roboto.className} ${poppins.variable} overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
            <ModalProvider />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
