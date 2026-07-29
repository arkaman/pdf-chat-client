import { Bot, User } from "lucide-react";

import type { ChatMessage as ChatMessageType } from "./types";

import {
    Message,
    MessageAvatar,
    MessageContent,
    MessageHeader,
} from "@/components/ui/message";

interface Props {
    message: ChatMessageType;
}

export function ChatMessage({ message }: Props) {
    const isUser = message.role === "user";

    return (
        <Message align={isUser ? "end" : "start"}>
            <MessageAvatar>
                {isUser ? <User size={30} /> : <Bot size={30} />}
            </MessageAvatar>

            <MessageContent>
                <MessageHeader>
                    {isUser ? "You" : "Assistant"}
                </MessageHeader>

                <div className="max-w-[80%] rounded-lg bg-muted px-4 py-3">
                    {message.content}
                </div>
            </MessageContent>
        </Message>
    );
}