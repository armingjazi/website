"use client";

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from "react";
import { Position } from "@/components/CareerGraph";

const DescriptionContext = createContext({
  description: "",
  setDescription: (_: string) => {},
});

const DescriptionProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [description, setDescription] = useState("");

  return (
    <DescriptionContext.Provider value={{ description, setDescription }}>
      {children}
    </DescriptionContext.Provider>
  );
};

const useDescription = () => {
  const context = useContext(DescriptionContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};

export { DescriptionProvider, DescriptionContext, useDescription };
