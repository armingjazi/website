"use client";

import { useEffect } from "react";
import CareerGraph from "@/components/CareerGraph";
import CareerTabular from "@/components/CareerTabular";
import ConversationBubble from "@/components/ConversationBubble";
import { Switch } from "@/components/ui/switch";
import ConversationBubbleMobile from "@/components/ConversationBubbleMobile";
import { Button } from "@/components/ui/button";
import { ListRestart } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTooltip } from "@/components/MouseTooltip";

export enum Modes {
  Graph= "graph",
  Tabular = "tabular",
}

const SwitchModes = ({mode}: {mode: Modes}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setTooltipContent } = useTooltip();


  useEffect(() => {
    return () => {
      setTooltipContent("");
    }
  }, [setTooltipContent]);


  const handleRestart = () => {
    window.location.reload();
  }


  const updateQueryParams = (mode: Modes) => {
    const params = new URLSearchParams(searchParams.toString());
    // replace the mode query param with the new value
    params.set("mode", mode);
    console.log(params.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="hidden sm:block">
        <div className="absolute top-3 right-16 z-50 text-center justify-center flex flex-row items-center">
          <Switch
            className={"mr-4"}
            id="view-mode"
            checked={mode === Modes.Tabular}
            onCheckedChange={() =>{
              updateQueryParams(mode === Modes.Tabular ? Modes.Graph : Modes.Tabular);
            }}
            onMouseOver={() => setTooltipContent("Switch graph and tabular view")}
            onMouseLeave={() => setTooltipContent("")}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={handleRestart}
            onMouseOver={() => setTooltipContent("Restart")}
            onMouseLeave={() => setTooltipContent("")}
          >
            <ListRestart />
          </Button>
        </div>
        {mode === Modes.Graph && (
          <>
            <ConversationBubble className='ml-10 mr-10 mt-5 fixed' /> <CareerGraph />
          </>
        )}
        {mode === Modes.Tabular && (
          <>
            <ConversationBubbleMobile />
            <CareerTabular />
          </>
        )}
      </div>
      <div className={"block sm:hidden"}>
        <ConversationBubbleMobile hideAvatar />
        <CareerTabular />
      </div>
    </>
  );
};

export default SwitchModes;
