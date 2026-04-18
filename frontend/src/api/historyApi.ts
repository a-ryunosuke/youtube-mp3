const MONGO_URL = "http://localhost:5000/api/posts";

type Props = {
    payload: {
        youtubeUrl: string;
        fileName: string;
        artist?: string;
        comment?: string;
    },
    token: string | null;
}

export const historyApi = async ({ payload, token }: Props) => {
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