import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import React from "react";
import { MouseTooltipProvider } from "@/components/MouseTooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Armin Jazi - Portfolio",
  description: "Armin Jazi's Portfolio",
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased bg-radial-dark`}
      >
        <SpeedInsights />
        <MouseTooltipProvider offset={{ x: 10, y: 20 }}>
          <div className="h-full bg-cover bg-center bg-fixed min-h-screen text-secondary-foreground leading-relaxed tracking-wider bg-radial-dark">
            {children}
          </div>
        </MouseTooltipProvider>
      </body>
    </html>
  );
}
