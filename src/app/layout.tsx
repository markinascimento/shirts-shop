"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";

import { Header } from "@/components/Header";
import { ShoesProvider } from "@/context/ShoesContext";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="h-full">
      <head />

      <body className={`w-full h-full ${sora.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ShoesProvider>
            <div className="flex flex-col flex-1 gap-1 w-full h-full px-4 mx-auto  overflow-hidden relative">
              <Header />

              <div className="flex flex-1 mb-1 overflow-auto">{children}</div>
            </div>
          </ShoesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
