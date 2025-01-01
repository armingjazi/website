"use client";

import React, {
  useState,
  createContext,
  useContext,
} from "react";

const DescriptionContext = createContext({
  description: "",
  setDescription: (description: string) => {
    console.warn(`DescriptionProvider not found ${description}`);
  },
});

const DescriptionProvider = ({
  children,
}: React.PropsWithChildren) => {
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
