export interface UploadResponse {
    message: string;
    filename: string;
    characters: number;
    chunks: number;
    indexed: boolean;
}

export interface ChatRequest {
    question: string;
}

export interface ChatResponse {
    answer: string;
}