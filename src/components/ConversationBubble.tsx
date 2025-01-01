"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDescription } from "@/components/DescriptionContext";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { cn } from "@/lib/utils";
const processor = unified().use(remarkParse).use(remarkHtml);

const Typewriter = ({
  text = "Type your text here...",
  speed = 100,
  delay = 0,
  onComplete = () => {},
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(false);
  }, [text]);

  const startTyping = useCallback(() => {
    setIsTyping(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (delay > 0 && !isTyping) {
      timer = setTimeout(startTyping, delay);
      return () => clearTimeout(timer);
    } else {
      startTyping();
    }
  }, [delay, isTyping, startTyping]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping && currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else if (currentIndex >= text.length) {
      onComplete();
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, onComplete, speed, text]);

  return (
    <div className={`font-mono ${className}`}>
      <div
        className="typewriter-content"
        dangerouslySetInnerHTML={{ __html: displayText }}
      ></div>
      <span className="typewriter-cursor" />
    </div>
  );
};

const ConversationBubble = ({
  className,
  delay = 0,
  speed = 35,
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
    <div className={cn(className, "m-10")}>
      <Avatar className="w-36 h-36 z-10 relative shadow-xl shadow-primary">
        <AvatarImage src="/me-xs.jpg" className='border-2 rounded-full border-primary' />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <div className="bg-popover-background/85 text-primary rounded-2xl rounded-tl-none border-2 border-primary/20 p-2 ml-32 mr-32 mt-[-48] z-20 relative w-[640px] shadow-2xl shadow-popover-background">
        <Typewriter
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
