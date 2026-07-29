import { apiFetch } from "./client";
import type { UploadResponse } from "./types";

export async function uploadPdf(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    return apiFetch<UploadResponse>("/upload", {
        method: "POST",
        body: formData,
    });
}