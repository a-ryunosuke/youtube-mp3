const MONGO_URL = "http://localhost:5000/api/posts";

export const historyApi = async (payload: { youtubeUrl: string; fileName: string; artist?: string; comment?: string; }, token: string | null) => {
    if (token) {
        await fetch(MONGO_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // JWT付与
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        });
    }
}