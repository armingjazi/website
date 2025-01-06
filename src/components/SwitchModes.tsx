"use client";

import { useState } from "react";
import CareerGraph from "@/components/CareerGraph";
import CareerTabular from "@/components/CareerTabular";
import ConversationBubble from "@/components/ConversationBubble";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import ConversationBubbleMobile from "@/components/ConversationBubbleMobile";

enum Modes {
  Graph,
  Tabular,
}

const SwitchModes = () => {
  const [mode, setMode] = useState(Modes.Tabular);

  return (
    <>
      <div className="hidden sm:block">
        <div className="absolute top-5 right-5 z-50 text-center justify-center flex flex-row">
          <Label id="view-mode" className={"text-sm mr-2"}>
            {mode === Modes.Tabular ? "Tabular" : "Graph"}
          </Label>
          <Switch
            id="view-mode"
            checked={mode === Modes.Tabular}
            onCheckedChange={() =>
              setMode(mode === Modes.Tabular ? Modes.Graph : Modes.Tabular)
            }
          />
        </div>
        {mode === Modes.Graph && (
          <>
            <ConversationBubble /> <CareerGraph />
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
        <ConversationBubbleMobile />
        <CareerTabular />
      </div>
    </>
  );
};

export default SwitchModes;
