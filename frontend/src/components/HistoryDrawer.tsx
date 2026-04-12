import { useContext, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { DisplayColorContext } from "../context/DisplayColorContext";
import { fetchHistory } from "../utils/fetchHistory";
import { historyDrawer } from "../tv/components/historyDrawer.tv";

type HistoryItem = {
    _id: string
    youtubeUrl: string
    fileName: string
    artist?: string
    comment?: string
    created_at: string
};

type Props = {
    isOpen: boolean
    onClose: () => void
}

export const HistoryDrawer = ({ isOpen, onClose }: Props) => {
    const { token } = useAuth();
    const { displayColor } = useContext(DisplayColorContext);
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const {
        overlay, drawer, title, item,
        itemLabel, itemText, closeButton, deleteButton
    } = historyDrawer({
        color: displayColor ? "light" : "dark",
        open: isOpen
    })

    useEffect(() => {
        if (isOpen && token) {
            fetchHistory(token).then(setHistory).catch(console.error)
        }
    }, [isOpen, token])

    const historyDelete = async (id: string) => {
        try {
            // urlからパス取得するので、urlにidを埋め込む必要あり
            const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                // body: JSON.stringify({ id: h._id })
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.message);
            fetchHistory(token).then(setHistory).catch(console.error)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className={overlay()} onClick={onClose} />
            <div className={drawer()}>
                <button className={closeButton()} onClick={onClose}>閉じる</button>
                <p className={title()}>ダウンロード履歴</p>
                {history.length === 0 ? (
                    <p className={itemText()}>履歴がありません</p>
                ) : (
                    // 双方の変換日時を比較して降順に並び替え
                    history.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((h) => (
                        <div key={h._id} className={item()}>
                            <button className={deleteButton()} onClick={() => historyDelete(h._id)}>×</button>
                            <p className={itemLabel()}>{h.fileName}</p>
                            <p className={itemText()}>{h.artist}</p>
                            <p className={itemText()}>{new Date(h.created_at).toLocaleDateString("ja-JP")}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}