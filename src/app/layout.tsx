import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DownloadPdf from "@/components/DownloadPdf";
import React from "react";
import { MouseTooltipProvider } from "@/components/MouseTooltip";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armin Jazi - Interactive CV",
  description: "Armin Jazi's interactive CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MouseTooltipProvider offset={{ x: 10, y: 20 }}>
          <div className="relative">
            <div
              className="h-full bg-cover bg-center bg-fixed z-[-1] bg-no-repeat top-0 left-0 right-0 fixed"
              style={{
                backgroundImage: "url('/background.png')",
                backgroundAttachment: "fixed",
              }}
            />
            {children}

            <div className="absolute right-3 top-3 z-50">
              <DownloadPdf />
            </div>
          </div>
        </MouseTooltipProvider>
      </body>
    </html>
  );
}
