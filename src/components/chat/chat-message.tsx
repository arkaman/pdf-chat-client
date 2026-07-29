import { Bot, LoaderCircle, User } from "lucide-react";

import type { ChatMessage as ChatMessageType } from "./types";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
                {isUser ? (
                    <User size={30} />
                ) : message.pending ? (
                    <LoaderCircle className="size-6 animate-spin" />
                ) : (
                    <Bot size={30} />
                )}
            </MessageAvatar>

            <MessageContent>
                <MessageHeader>
                    {isUser ? "You" : "Assistant"}
                </MessageHeader>

                <div className="max-w-[80%] rounded-lg bg-muted px-4 py-3">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                    </ReactMarkdown>
                </div>
            </MessageContent>
        </Message>
    );
}