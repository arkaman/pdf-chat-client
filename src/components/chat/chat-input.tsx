import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props {
    loading: boolean;
    onSend: (message: string) => void;
}

export function ChatInput({
    loading,
    onSend,
}: Props) {
    const [text, setText] = useState("");

    function send() {
        if (!text.trim()) return;

        onSend(text);

        setText("");
    }

    return (
        <div className="border-t p-4">
            <div className="flex gap-2">
                <Textarea
                    value={text}
                    rows={2}
                    disabled={loading}
                    placeholder="Ask something about your PDFs..."
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {
                            e.preventDefault();
                            send();
                        }
                    }}
                />

                <Button
                    disabled={loading || !text.trim()}
                    onClick={send}
                >
                    <Send className="size-4" />
                </Button>
            </div>
        </div>
    );
}