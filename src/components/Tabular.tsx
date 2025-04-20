"use client";

import { useEffect } from "react";
import CareerTabular from "@/components/CareerTabular";
import ConversationBubbleMobile from "@/components/ConversationBubbleMobile";
import { useTooltip } from "@/components/MouseTooltip";

const Tabular = () => {
  const { setTooltipContent } = useTooltip();


  useEffect(() => {
    return () => {
      setTooltipContent("");
    }
  }, [setTooltipContent]);

  return (
    <>
      <div className="hidden sm:block">
        <ConversationBubbleMobile />
        <CareerTabular />
      </div>
      <div className={"block sm:hidden"}>
        <ConversationBubbleMobile hideAvatar />
        <CareerTabular />
      </div>
    </>
  );
};

export default Tabular;
