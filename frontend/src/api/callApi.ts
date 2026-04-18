import { historyApi } from "./historyApi";

const FLASK_URL = "http://localhost:5001/download";

type Props = {
  payload: {
    youtubeUrl: string;
    fileName: string;
    artist?: string;
    comment?: string;
  },
  token: string | null;
}

export async function callApi({ payload, token }: Props) {
  // Flaskへダウンロードリクエスト
  const res = await fetch(FLASK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Flask error: HTTP ${res.status}`);

  // MongoDBに履歴保存
  await historyApi({ payload, token });

  return res.blob();
}