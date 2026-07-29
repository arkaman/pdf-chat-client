import { CirclePlus, FolderOpen } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

export function EmptyUpload() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FolderOpen />
                </EmptyMedia>
                <EmptyTitle>No Uploads Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t uploaded any PDFs yet. Get started by uploading
                    your first PDF.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
                <Button>
                    <CirclePlus />
                    Upload PDF
                </Button>
            </EmptyContent>
        </Empty>
    )
}
