"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDescription } from "@/components/DescriptionContext";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { cn } from "@/lib/utils";
import Typewriter from "@/components/TypeWriter";
import { INITIAL_TEXT } from "@/components/ConversationBubble";
import {
  ArrowDownLeft,
  ArrowDownLeftFromCircle,
  ArrowDownRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  BadgeAlert,
  ChevronDown,
  Dot,
  MinusIcon,
  PlusIcon,
} from "lucide-react";

const processor = unified().use(remarkParse).use(remarkHtml);

const ConversationBubbleMobile = ({
  className,
  delay = 0,
  speed = 25,
  hideAvatar = false,
}: {
  className?: string;
  delay?: number;
  speed?: number;
  hideAvatar?: boolean;
}) => {
  const { description } = useDescription();
  const [text, setText] = useState(INITIAL_TEXT);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  useEffect(() => {
    if (!description) {
      return;
    }
    if (text !== INITIAL_TEXT) {
      setHasNewMessage(true);
    }

    processor.process(description).then((file) => {
      setText(String(file));
    });
  }, [description]);

  const [minimized, setMinimized] = useState(false);
  return (
    <div
      className={cn(
        className,
        "bottom-4 right-4 fixed z-50 flex-col flex items-end",
      )}
    >
      {minimized ? (
        <div className="bg-popover-background/85 text-primary rounded-2xl rounded-br-none border-2 border-primary/20 relative shadow-2xl shadow-popover-background p-2 z-20 w-[320px] sm:mr-20 sm:mb-[-20] sm:mt-[-48] ">
          <ArrowDownRight
            className="w-7 h-7 p-1 bg-popover-background/85 text-primary rounded-full border-2 border-primary/20 cursor-pointer mt-[-20] mr-[-20]"
            onClick={() => setMinimized(false)}
          />
          <Typewriter
            text={text}
            delay={delay}
            speed={speed}
            className="text-xs leading-relaxed p-2"
          />
        </div>
      ) : (
        <>
          <ArrowUpLeft
            className="w-7 h-7 p-1 bg-popover-background/85 text-primary rounded-full border-2 border-primary/20 cursor-pointer"
            onClick={() => setMinimized(true)}
          />
          {hasNewMessage && (
            <>
              <Dot className="absolute text-amber-700 h-12 w-12 bottom-0.5 pointer-events-none" />
              <Dot className="absolute text-amber-700 h-12 w-12 animate-ping bottom-0.5 pointer-events-none" />
            </>
          )}

        </>
      )}
      {!hideAvatar ? (
        <Avatar className={"z-10 relative shadow-xl shadow-primary w-24 h-24"}>
          <AvatarImage
            src="/me-xs.jpg"
            className="border-2 rounded-full border-primary"
          />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      ) : null}
    </div>
  );
};

export default ConversationBubbleMobile;
