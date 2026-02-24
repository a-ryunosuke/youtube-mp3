import { audioDownloadApi } from "../api/audioDownloadApi";
import type { ContactFormValues } from "./schema";

export const callApi = async ( data: ContactFormValues) => {
        const { youtubeUrl, fileName, artist, comment } = data
        
        try {
            const blob = await audioDownloadApi({
                youtubeUrl,
                fileName,
                title: fileName,   // ← title に fileName を入れるのは意図的？
                artist,
                comment
            });
    
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${fileName || "audio"}.mp3`;  // null/空対策
            document.body.appendChild(a);               // ← これがないとSafariなどで動かないことがある
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("ダウンロード失敗", err);
            throw err;  // 上位でエラー処理したい場合は
        }
    }