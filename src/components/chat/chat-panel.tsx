import { useState } from "react";

import { ChatHistory } from "./chat-history";
import { ChatInput } from "./chat-input";
import type { ChatMessage } from "./types";

export function ChatPanel() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "👋 Hi! Upload one or more PDFs and ask me anything about their contents.",
            timestamp: new Date(),
        },
    ]);

    const [loading, setLoading] = useState(false);

    async function handleSend(text: string) {
        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);

        setLoading(true);

        // Temporary mock response
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const assistantMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "This is a placeholder response.",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);

        setLoading(false);
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