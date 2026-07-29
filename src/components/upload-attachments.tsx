import { FileText, XIcon } from "lucide-react";

import type { UploadResponse } from "@/api/types";

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

interface UploadedDocument {
    file: File;
    metadata: UploadResponse;
}

interface UploadAttachmentsProps {
    document: UploadedDocument;
}

export function UploadAttachments({
    document,
}: UploadAttachmentsProps) {
    const { file, metadata } = document;

    return (
        <div className="mx-auto flex w-full max-w-md flex-col gap-4 p-6">
            <AttachmentGroup>
                <Attachment>
                    <AttachmentMedia className="min-h-full">
                        <FileText />
                    </AttachmentMedia>

                    <AttachmentContent>
                        <AttachmentTitle>{file.name}</AttachmentTitle>

                        <AttachmentDescription>
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                        </AttachmentDescription>

                        <AttachmentDescription>
                            {metadata.characters.toLocaleString()} characters •{" "}
                            {metadata.chunks} chunks
                        </AttachmentDescription>

                        <AttachmentDescription>
                            {metadata.indexed
                                ? "Indexed successfully"
                                : "Not indexed"}
                        </AttachmentDescription>
                    </AttachmentContent>

                    <AttachmentActions>
                        <AttachmentAction aria-label="Remove PDF">
                            <XIcon />
                        </AttachmentAction>
                    </AttachmentActions>
                </Attachment>
            </AttachmentGroup>
        </div>
    );
}