"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useChatRuntime, AssistantChatTransport } from "@assistant-ui/ai-sdk";
import { lastAssistantMessageIsCompleteWithToolCalls } from "ai";
import { Thread } from "@/components/assistant-ui/elements/thread.aui";

export const Assistant = () => {
  const runtime = useChatRuntime({
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
    transport: new AssistantChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="flex h-dvh flex-col">
        <header className="border-b px-4 py-3 text-sm">
          <span className="font-medium">Inference Gateway Lab</span>
          <span className="text-muted-foreground"> · llm-sim</span>
        </header>
        <main className="min-h-0 flex-1">
          <Thread />
        </main>
        <footer className="text-muted-foreground border-t px-4 py-2 text-center text-xs">
          Done by Ivan Tan and Benjamin
        </footer>
      </div>
    </AssistantRuntimeProvider>
  );
};
