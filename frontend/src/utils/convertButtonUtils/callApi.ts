// import { audioDownloadApi } from "../../api/audioDownloadApi"
// import type { FormValue } from "../../hooks/useFileTextHooks"

// type Props = {
//     formValue: FormValue
// }

// export const callApi = ({ formValue }: Props ) => {
//     const { youtubeUrl, fileName, artist, comment } = formValue
    
//     const run = async () => {
//         const blob = await audioDownloadApi({
//             youtubeUrl,
//             fileName,
//             title : fileName,
//             artist,
//             comment
//         });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = fileName + ".mp3"
//         a.click();
//         URL.revokeObjectURL(url)
//     }

//     return{ run }
// }

// // なぜかダウンロードされない

import { audioDownloadApi } from "../../api/audioDownloadApi"
import type { FormValue } from "../../hooks/useFileTextHooks"

type Props = {
    formValue: FormValue
}

export const callApi = async ({ formValue }: Props) => {
    const { youtubeUrl, fileName, artist, comment } = formValue
    
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