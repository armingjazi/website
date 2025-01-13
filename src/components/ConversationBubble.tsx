"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDescription } from "@/components/DescriptionContext";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { cn } from "@/lib/utils";
import TypeWriter from "@/components/TypeWriter";

const processor = unified().use(remarkParse).use(remarkHtml);

export const INITIAL_TEXT =
  "Hey there! 👋 Welcome to my interactive life story. Start clicking around, you will get a hang of how this works eventually 💀! You can also download my resume from the top right corner.";

const ConversationBubble = ({
  className,
  delay = 0,
  speed = 25,
}: {
  className?: string;
  delay?: number;
  speed?: number;
}) => {
  const { description } = useDescription();
  const [text, setText] = useState(INITIAL_TEXT);

  useEffect(() => {
    if (!description) {
      return;
    }

    processor.process(description).then((file) => {
      setText(String(file));
    });
  }, [description]);
  return (
    <div className={cn(className, "z-50")}>
      <Avatar className="w-36 h-36 z-10 relative shadow-xl shadow-primary">
        <AvatarImage
          src="/me-xs.jpg"
          className="border-2 rounded-full border-primary"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <div className="bg-popover-background/85 text-primary rounded-2xl rounded-tl-none border-2 border-primary/20 p-2 ml-32 mr-32 mt-[-48] z-20 relative w-[640px] shadow-2xl shadow-popover-background">
        <TypeWriter
          text={text}
          delay={delay}
          speed={speed}
          className="text-xs leading-relaxed"
        />
      </div>
    </div>
  );
};

export default ConversationBubble;
