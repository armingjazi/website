// app/api/chat/route.js
import { rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";
import systemPrompt from "@/app/api/chat/prompt";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
});

export async function POST(request: Request) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";

  try {
    await limiter.check(5, ip);
  } catch {
    return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const json: { messages: Message[] } = await request.json();

  const SYSTEM_PROMPT = systemPrompt(250);

  const chat_messages = json.messages.filter(
    (message) => message.role !== "system",
  );

  const model = "ServiceNow-AI/Apriel-1.5-15b-Thinker";
  try {
    const response = await fetch(
      "https://api.together.xyz/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [SYSTEM_PROMPT, ...chat_messages],
        }),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      return Response.json(
        { error: `Failed to get response from Hugging Face` },
        { status: 500 },
      );
    }

    const data = await response.json();
    // remove everything between <think> and </think>
    const contentText = data.choices[0].message.content
      .replace(/<think>[\s\S]*?<\/think>/g, "")
      .replace(/<br>/g, "\n")
      .trim();
    return Response.json({ response: contentText });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to process your request" },
      { status: 500 },
    );
  }
}
