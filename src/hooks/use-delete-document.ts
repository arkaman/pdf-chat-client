import { useState } from "react";

import { deletePdf } from "@/api/pdf";

export function useDeleteDocument() {
    const [loading, setLoading] = useState(false);

    async function remove(filename: string) {
        try {
            setLoading(true);

            return await deletePdf(filename);
        } finally {
            setLoading(false);
        }
    }

    return {
        remove,
        loading,
    };
}