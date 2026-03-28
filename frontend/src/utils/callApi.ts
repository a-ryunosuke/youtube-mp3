const FLASK_URL = "http://localhost:5001/download";
const MONGO_URL = "http://localhost:5000/api/posts";

export async function callApi(
  payload: {
    youtubeUrl: string;
    fileName: string;
    artist?: string;
    comment?: string;
  },
  token: string | null  // AuthContextから受け取る
) {
  // Flaskへダウンロードリクエスト
  const res = await fetch(FLASK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Flask error: HTTP ${res.status}`);

  // ダウンロード成功後、MongoDBに履歴保存
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

  return res.blob();
}