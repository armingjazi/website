import React from "react";
import { DescriptionProvider } from "@/components/DescriptionContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DescriptionProvider>
      <div>{children}</div>
    </DescriptionProvider>
  );
}
