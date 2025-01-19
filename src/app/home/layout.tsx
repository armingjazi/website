import React from "react";
import { DescriptionProvider } from "@/components/DescriptionContext";
import DownloadPdf from "@/components/DownloadPdf";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DescriptionProvider>
      <div>{children}</div>
      <div className="absolute right-3 top-3 z-50">
        <DownloadPdf />
      </div>
    </DescriptionProvider>
  );
}
