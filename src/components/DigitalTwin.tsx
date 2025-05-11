"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { SendHorizonal, UserRound } from "lucide-react";
import { MeAvatar } from "@/components/Avatar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DigitalTwin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setError("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...messages,
          { role: "user", content: userMessage },
        ]),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        if (response.status === 429) {
          setError(
            "Please wait a moment before sending another message, I am busy answering some other people 🙏.",
          );
        } else {
          setError(
            "I am having trouble finding an answer for that last question, the real me will take a look 🙏. ",
          );
        }
        return;
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] rounded-lg shadow-lg flex flex-col">
      <div className="p-4">
        <h1 className="text-l font-semibold">
          This is my digital twin. It is informed on my CV and life story and
          you can ask anything.
        </h1>
        <h2 className="text-sm text-gray-500">
          ⚠️ Be aware this LLM twin does not have any strict guidelines.
        </h2>
        <h2 className="text-sm text-gray-500">
          As such it is not meant for an authentic conversation, but only to
          showcase my work.
        </h2>
        <h2 className="text-sm text-gray-500">
          I am working on a better fine-tuned version for the future
        </h2>
      </div>

      <div className="flex-1 p-4">
        <div className="h-full overflow-y-auto bg-muted/10 border border-gray-500 rounded-2xl p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2 ${
                message.role === "user" ? "flex-row-reverse items-center" : ""
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-9 h-9 rounded-full bg-primary-200 flex items-center justify-center">
                  <MeAvatar className="w-9 h-9" />
                </div>
              )}
              <div
                className={` py-2 rounded-lg max-w-[80%] text-secondary-foreground ${
                  message.role === "user" ? "px-4 bg-secondary/50" : "px-1 bg-transparent"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                <MeAvatar className="w-9 h-9" />
              </div>
              <div className="flex space-x-1 mt-5">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          )}
          {error && (
            <div className="text-red-500 text-center p-2 bg-red-50 rounded-lg">
              {error}
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className="p-4 sticky bottom-0 z-50">
        <form onSubmit={handleSubmit} className="relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start typing..."
            className="w-full py-4 px-5 pr-14 text-secondary-foreground border border-gray-500 rounded-2xl outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-secondary-foreground bg-muted-foreground"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2 hover:bg-primary/80 transition disabled:opacity-50"
          >
            <SendHorizonal className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DigitalTwin;
