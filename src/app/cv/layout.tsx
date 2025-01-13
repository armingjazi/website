import React from "react";
import { MouseTooltipProvider } from "@/components/MouseTooltip";
import { DescriptionProvider } from "@/components/DescriptionContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DescriptionProvider>
      <MouseTooltipProvider offset={{ x: 10, y: 10 }}>
        <div>{children}</div>
      </MouseTooltipProvider>
    </DescriptionProvider>
  );
}
