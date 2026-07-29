import { ScrollArea } from "@/components/ui/scroll-area";

import { MessageGroup } from "@/components/ui/message";

import { ChatMessage } from "./chat-message";
import type { ChatMessage as ChatMessageType } from "./types";

interface Props {
    messages: ChatMessageType[];
}

export function ChatHistory({ messages }: Props) {
    return (
        <ScrollArea className="h-full">
            <MessageGroup className="space-y-6 p-6">
                {messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                    />
                ))}
            </MessageGroup>
        </ScrollArea>
    );
}