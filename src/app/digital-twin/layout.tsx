import React from "react";
import { Header } from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="sticky right-3 top-3 z-50 bg">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
