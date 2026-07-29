import { useState } from "react";
import { uploadPdf } from "@/api/pdf";
import type { UploadResponse } from "@/api/types";

export function useUpload() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UploadResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function upload(file: File) {
        try {
            setLoading(true);
            setError(null);

            const response = await uploadPdf(file);

            setData(response);

            return response;
        } catch (err) {
            const message =
                err instanceof Error ? err.message : "Upload failed";

            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        upload,
        loading,
        data,
        error,
    };
}