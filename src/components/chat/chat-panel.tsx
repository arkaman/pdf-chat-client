import { useState } from "react";

import { ChatHistory } from "./chat-history";
import { ChatInput } from "./chat-input";
import type { ChatMessage } from "./types";

import { useChat } from "@/hooks/use-chat";

export function ChatPanel() {
    const { ask, loading } = useChat();

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "👋 Hi! Upload one or more PDFs and ask me anything about their contents.",
            timestamp: new Date(),
        },
    ]);

    async function handleSend(text: string) {
        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);

        try {
            const response = await ask(text);

            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response.answer,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content:
                    error instanceof Error
                        ? `❌ ${error.message}`
                        : "❌ Something went wrong.",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        }
    }

    return (
        <div className="flex h-full flex-col">
            <div className="border-b px-6 py-4">
                <h2 className="text-lg font-heading font-semibold">Chat</h2>

                <p className="text-sm text-muted-foreground">
                    Ask questions about your uploaded PDFs.
                </p>
            </div>

            <div className="min-h-0 flex-1">
                <ChatHistory messages={messages} />
            </div>

            <ChatInput
                loading={loading}
                onSend={handleSend}
            />
        </div>
    );
}