// FLASKサーバのURLを定数として定義。変更することで接続先を変更することが可能。
const BASE_URL = "http://localhost:5001/download";

export async function audioDownloadApi(payload: {
  youtubeUrl: string;
  fileName: string;
  title?: string;
  artist?: string;
  comment?: string;
}) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.blob()
}