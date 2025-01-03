"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDescription } from "@/components/DescriptionContext";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { cn } from "@/lib/utils";
import Typewriter from "@/components/TypeWriter";

const processor = unified().use(remarkParse).use(remarkHtml);

const ConversationBubbleMobile = ({
  className,
  delay = 0,
  speed = 25,
}: {
  className?: string;
  delay?: number;
  speed?: number;
}) => {
  const { description } = useDescription();
  const [text, setText] = useState(
    "Hey there! 👋 Welcome to my interactive life story. Start clicking around, you will get a hang of how this works eventually 💀!",
  );

  useEffect(() => {
    if (!description) {
      return;
    }

    processor.process(description).then((file) => {
      setText(String(file));
    });
  }, [description]);
  return (
    <div className={cn(className, "bottom-4 right-4 fixed z-50 flex-col flex items-end")}>
      <div className="bg-popover-background/85 text-primary rounded-2xl mr-20 mb-[-20] rounded-br-none border-2 border-primary/20 p-2 mt-[-48] z-20 relative w-[320px] shadow-2xl shadow-popover-background">
        <Typewriter
          text={text}
          delay={delay}
          speed={speed}
          className="text-xs leading-relaxed"
        />
      </div>
      <Avatar className="w-24 h-24 z-10 relative shadow-xl shadow-primary">
        <AvatarImage
          src="/me-xs.jpg"
          className="border-2 rounded-full border-primary"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ConversationBubbleMobile;
