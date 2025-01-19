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

  const messages: Message[] = await request.json();

  const SYSTEM_PROMPT = systemPrompt(100);

  const chat_messages = messages.filter((message) => message.role !== "system");

  const model = "Mistral-7B-Instruct-v0.3";
  const space = "mistralai";
  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${space}/${model}/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            SYSTEM_PROMPT,
            ...chat_messages,
          ],
          max_tokens: 350,
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
    return Response.json({ response: data.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to process your request" },
      { status: 500 },
    );
  }
}
