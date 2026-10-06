import { createOpenAI } from "@ai-sdk/openai";
import { frontendTools } from "@assistant-ui/ai-sdk";
import {
  type JSONSchema7,
  streamText,
  convertToModelMessages,
  type UIMessage,
} from "ai";

export const maxDuration = 30;

// llm-sim (behind the inference gateway) speaks the OpenAI chat-completions API.
const gateway = createOpenAI({
  baseURL: process.env.GATEWAY_BASE_URL ?? "http://localhost:8080/v1",
  apiKey: process.env.GATEWAY_API_KEY ?? "not-needed",
});

export async function POST(req: Request) {
  const {
    messages,
    system,
    tools,
  }: {
    messages: UIMessage[];
    system?: string;
    tools?: Record<string, { description?: string; parameters: JSONSchema7 }>;
  } = await req.json();

  const result = streamText({
    model: gateway.chat(process.env.GATEWAY_MODEL ?? "llm-sim"),
    messages: await convertToModelMessages(messages),
    tools: {
      ...frontendTools(tools ?? {}),
    },
    ...(system === undefined ? {} : { system }),
  });

  return result.toUIMessageStreamResponse({
    onError: (error) =>
      error instanceof Error ? error.message : String(error),
  });
}
