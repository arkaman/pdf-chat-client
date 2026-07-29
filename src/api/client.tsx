const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL;

export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Request failed");
    }

    return response.json() as Promise<T>;
}