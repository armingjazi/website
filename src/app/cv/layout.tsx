import React from "react";
import { DescriptionProvider } from "@/components/DescriptionContext";
import DownloadPdf from "@/components/DownloadPdf";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DescriptionProvider>
      <div className="sticky right-3 top-3 z-50 bg">
        <Header />
      </div>
      <div>{children}</div>
    </DescriptionProvider>
  );
}
