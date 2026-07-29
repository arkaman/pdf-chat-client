import { useState } from "react";

import type { UploadResponse } from "./api/types";

import { AppHeader } from "./components/app-header";
import { EmptyUpload } from "./components/empty-upload";
import { UploadAttachments } from "./components/upload-attachments";

import { useUpload } from "./hooks/use-upload";
import { useDeleteDocument } from "./hooks/use-delete-document";
import { ChatPanel } from "./components/chat/chat-panel";

export interface UploadedDocument {
  id: string;
  file: File;
  metadata: UploadResponse;
}

export function App() {
  const { upload, loading } = useUpload();

  const [documents, setDocuments] = useState<UploadedDocument[]>([]);

  const { remove } = useDeleteDocument();

  async function handleUpload(file: File) {
    const metadata = await upload(file);

    setDocuments((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        file,
        metadata,
      },
    ]);
  }

  async function handleRemove(id: string) {
    const document = documents.find((doc) => doc.id === id);

    if (!document) return;

    try {
      await remove(document.metadata.filename);

      setDocuments((prev) =>
        prev.filter((doc) => doc.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex h-svh flex-col">
      <AppHeader />

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="w-full min-w-0 border-r border-b md:w-1/2 md:border-b-0">
          {documents.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <EmptyUpload
                loading={loading}
                onUpload={handleUpload}
              />
            </div>
          ) : (
            <UploadAttachments
              documents={documents}
              loading={loading}
              onUpload={handleUpload}
              onRemove={handleRemove}
            />
          )}
        </div>

        <div className="w-full min-w-0 md:w-1/2">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}

export default App;