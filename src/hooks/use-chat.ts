import { useState } from "react";

import { chat } from "@/api/pdf";

export function useChat() {
    const [loading, setLoading] = useState(false);

    async function ask(question: string) {
        try {
            setLoading(true);

            return await chat(question);
        } finally {
            setLoading(false);
        }
    }

    return {
        ask,
        loading,
    };
}