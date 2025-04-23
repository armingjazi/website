import React from "react";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="sticky right-3 top-0 z-50">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
