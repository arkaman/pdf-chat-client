import { useRef } from "react";
import type { ChangeEvent } from "react";
import { CirclePlus, FolderOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty";

interface EmptyUploadProps {
    loading: boolean;
    onUpload: (file: File) => Promise<void>;
}

export function EmptyUpload({
    loading,
    onUpload,
}: EmptyUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    async function handleChange(
        event: ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) return;

        try {
            await onUpload(file);
        } finally {
            event.target.value = "";
        }
    }

    return (
        <Empty>
            <input
                ref={inputRef}
                hidden
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleChange}
            />

            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FolderOpen />
                </EmptyMedia>

                <EmptyTitle>No Uploads Yet</EmptyTitle>

                <EmptyDescription>
                    You haven't uploaded any PDFs yet. Upload one to start
                    chatting with it.
                </EmptyDescription>
            </EmptyHeader>

            <EmptyContent className="flex-row justify-center">
                <Button
                    disabled={loading}
                    onClick={() => inputRef.current?.click()}
                >
                    {loading ? (
                        <>
                            <Spinner className="mr-2 size-4" />
                            Uploading...
                        </>
                    ) : (
                        <>
                            <CirclePlus className="mr-2 size-4" />
                            Upload PDF
                        </>
                    )}
                </Button>
            </EmptyContent>
        </Empty>
    );
}