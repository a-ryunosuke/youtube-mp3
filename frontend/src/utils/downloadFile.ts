export const downloadFile = (blob: Blob, filename: string) => {
    // blobから一時的なURLを作成
    const url = window.URL.createObjectURL(blob);
    // aタグを作成
    const a = document.createElement("a");
    a.href = url;

    // ユーザーが入力した値で保存
    // download属性＝保存時のファイル名指定
    a.download = `${filename || "audio"}.mp3`;
    document.body.appendChild(a);
    // aタグを自動的にクリック→ダウンロード開始
    a.click();
    // 使用済みaタグ削除
    a.remove();
    window.URL.revokeObjectURL(url);
}