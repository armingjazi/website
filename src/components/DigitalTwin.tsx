"use client";

import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@assistant-ui/react";
import { Thread } from "@/components/assistant-ui/thread";

const DigitalTwinAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content
            .filter((c) => c.type === "text")
            .map((c) => c.text)
            .join("\n"),
        })),
      }),
      signal: abortSignal,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to get response");
    }

    const data = await response.json();
    return {
      content: [
        {
          type: "text",
          text: data.response,
        },
      ],
    };
  },
};

const DigitalTwinContent = () => {
  return (
    <div className="max-w-4xl mx-auto rounded-lg shadow-lg bg-background">
      <Thread />
    </div>
  );
};

export const DigitalTwin = () => {
  const runtime = useLocalRuntime(DigitalTwinAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <DigitalTwinContent />
    </AssistantRuntimeProvider>
  );
};

export default DigitalTwin;
