import React from "react";
import { DescriptionProvider } from "@/components/DescriptionContext";
import { Header } from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";

const navigationLinks = [
  { id: "armin-jazi", name: "Armin Jazi" },
  { id: "web-docker", name: "Web Docker" },
  { id: "writings", name: "Writings" },
  { id: "digital-twin", name: "Digital Twin" },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
