import { historyApi } from "./historyApi";

const FLASK_URL = "http://localhost:5001/download";

export async function callApi(
  payload: {
    youtubeUrl: string;
    fileName: string;
    artist?: string;
    comment?: string;
  },
  // AuthContextから受け取る
  token: string | null
) {
  // Flaskへダウンロードリクエスト
  const res = await fetch(FLASK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Flask error: HTTP ${res.status}`);

  // MongoDBに履歴保存
  historyApi(payload, token);

  // // ダウンロード成功後、MongoDBに履歴保存
  // if (token) {
  //   await fetch(MONGO_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // JWT付与
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(payload),
  //   });
  // }

  return res.blob();
}