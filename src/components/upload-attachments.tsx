import { useRef } from "react";
import type { ChangeEvent } from "react";
import {
    CirclePlus,
    FileText,
    XIcon,
} from "lucide-react";

import type { UploadedDocument } from "@/App";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import {
    Attachment,
    AttachmentAction,
    AttachmentActions,
    AttachmentContent,
    AttachmentDescription,
    AttachmentGroup,
    AttachmentMedia,
    AttachmentTitle,
} from "@/components/ui/attachment";

interface UploadAttachmentsProps {
    documents: UploadedDocument[];
    loading: boolean;
    onUpload: (file: File) => Promise<void>;
    onRemove: (id: string) => void;
}

export function UploadAttachments({
    documents,
    loading,
    onUpload,
    onRemove,
}: UploadAttachmentsProps) {
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
        <div className="flex h-full flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                    Documents
                </h2>

                <>
                    <input
                        ref={inputRef}
                        hidden
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleChange}
                    />

                    <Button
                        size="sm"
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
                </>
            </div>

            <AttachmentGroup>
                {documents.map((document) => (
                    <Attachment key={document.id}>
                        <AttachmentMedia className="min-h-full">
                            <FileText />
                        </AttachmentMedia>

                        <AttachmentContent>
                            <AttachmentTitle>
                                {document.file.name}
                            </AttachmentTitle>

                            <AttachmentDescription>
                                {(document.file.size / 1024 / 1024).toFixed(2)} MB
                            </AttachmentDescription>

                            <AttachmentDescription>
                                {document.metadata.characters.toLocaleString()} characters •{" "}
                                {document.metadata.chunks} chunks
                            </AttachmentDescription>

                            <AttachmentDescription>
                                {document.metadata.indexed
                                    ? "Indexed successfully"
                                    : "Not indexed"}
                            </AttachmentDescription>
                        </AttachmentContent>

                        <AttachmentActions>
                            <AttachmentAction
                                aria-label="Remove PDF"
                                onClick={() => onRemove(document.id)}
                            >
                                <XIcon />
                            </AttachmentAction>
                        </AttachmentActions>
                    </Attachment>
                ))}
            </AttachmentGroup>
        </div>
    );
}