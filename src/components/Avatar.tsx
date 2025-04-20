import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";

export const MeAvatar = ({ className }: { className: string }) => {
  return (
    <Avatar className={cn("z-10 relative w-24 h-24", className)}>
      <AvatarImage
        src="/me-xs.jpg"
        className="border-[1px] rounded-full border-primary"
      />
      <AvatarFallback>AJ</AvatarFallback>
    </Avatar>
  );
};
