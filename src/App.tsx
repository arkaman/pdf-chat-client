import { useState } from "react";

import { AppHeader } from "./components/app-header";
import { EmptyUpload } from "./components/empty-upload";
import { UploadAttachments } from "./components/upload-attachments";

import { useUpload } from "./hooks/use-upload";
import type { UploadResponse } from "./api/types";

interface UploadedDocument {
  file: File;
  metadata: UploadResponse;
}

export function App() {
  const { upload, loading } = useUpload();

  const [document, setDocument] = useState<UploadedDocument | null>(null);

  async function handleUpload(file: File) {
    const metadata = await upload(file);

    setDocument({
      file,
      metadata,
    });
  }

  return (
    <div className="flex h-svh flex-col">
      <AppHeader />

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <div className="flex w-full min-w-0 items-center justify-center border-r border-b md:w-1/2 md:border-b-0">
          {document ? (
            <UploadAttachments document={document} />
          ) : (
            <EmptyUpload
              loading={loading}
              onUpload={handleUpload}
            />
          )}
        </div>

        <div className="w-full min-w-0 md:w-1/2">
          Chat area
        </div>
      </div>
    </div>
  );
}

export default App;