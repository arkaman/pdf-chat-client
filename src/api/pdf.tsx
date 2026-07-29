import { apiFetch } from "./client";
import type {
    ChatRequest,
    ChatResponse,
    UploadResponse,
} from "./types";

export async function uploadPdf(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    return apiFetch<UploadResponse>("/upload", {
        method: "POST",
        body: formData,
    });
}

export async function chat(question: string) {
    return apiFetch<ChatResponse>("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            question,
        } satisfies ChatRequest),
    });
}