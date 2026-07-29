import { FileText } from "lucide-react"

export function AppHeader() {
    return (
        <header className="flex items-center justify-between border-b px-6 py-4">
            <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <FileText className="size-5" />
                </div>
                <div>
                    <h1 className="font-heading text-base leading-tight font-semibold">
                        PDF Chat Assistant
                    </h1>
                    <p className="text-xs text-muted-foreground">
                        Chat with your PDF using Gemini and Chroma
                    </p>
                </div>
            </div>
        </header>
    )
}