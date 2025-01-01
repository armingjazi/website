"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";
import { Position } from "@/components/CareerGraph";

const TooltipContext = createContext({
  tooltipContent: "",
  setTooltipContent: (tooltip: string) => {
    console.warn(`TooltipProvider not found ${tooltip}`);
  },
});

const MouseTooltipProvider = ({
  children,
  offset,
}: React.PropsWithChildren<{ offset: Position }>) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transform = `translate(${e.clientX + (offset.x ?? 0)}px, ${e.clientY + (offset.y ?? 0)}px)`;
      }
    };

    if (tooltipContent) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [tooltipContent, offset]);

  return (
    <TooltipContext.Provider value={{ tooltipContent, setTooltipContent }}>
      {children}
      {tooltipContent && (
        <div
          ref={tooltipRef}
          className="fixed pointer-events-none p-2 top-0 left-0  bg-popover-background text-primary rounded-lg rounded-tl-none border-2 border-primary/20 z-50 max-w-48"
          style={{ transform: "translate(-100px, -100px)" }}
        >
          <span className="block text-center truncate z-50 text-xs w-full h-full">
            {tooltipContent}
          </span>
        </div>
      )}
    </TooltipContext.Provider>
  );
};

const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};

export { MouseTooltipProvider, TooltipContext, useTooltip };
