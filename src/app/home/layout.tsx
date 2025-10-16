import React from "react";
import { DescriptionProvider } from "@/components/DescriptionContext";
import { Header } from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import { links } from "@/app/links";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationLinks = links.map((link) => ({
    id: link.id,
    name: link.name,
  }));
  return (
    <DescriptionProvider>
      <div className="sticky right-3 top-0 z-50">
        <Header />
      </div>
      <SideNavigation links={navigationLinks} />
      <div>{children}</div>
    </DescriptionProvider>
  );
}
