import { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { DisplayColorContext } from "../context/DisplayColorContext";
import { historyDrawer } from "../tv/history.tv";

type HistoryItem = {
    _id: string
    youtubeUrl: string
    fileName: string
    artist?: string
    comment?: string
    created_at: string
};

export const HistoryDrawer = ({ isOpen, onClose }) => {
    const { token } = useAuth();
    const { displayColor } = useContext(DisplayColorContext);
    const [history, setHistory] = useState([]);

    const {
        overlay, drawer, title, item,
        itemLabel, itemSub, closeButton
    } = historyDrawer({
        color: displayColor ? "light" : "dark"
    })

    useEffect(() => {
        if(isOpen && token) {
            fetchHistory(token).then(setHistory).catch(console.error)
        }
    }, [isOpen, token])
    
    return (
        <div>
            <div className={overlay()} onClick={onClose} />

            <div className={drawer()}>
                <button className={closeButton()} onClick={onClose}>閉じる</button>
                <p className={title()}>ダウンロード履歴</p>
                {history.length === 0 ? (
                    <p className="text-sm opacity-60">r履歴がありません</p>
                ) : (
                    history.map((h) => (
                        <div key={h._id} className={item()}>
                            <p className={itemLabel()}>{h.fileName}</p>
                            <p className={itemSub()}>{h.artist ?? "アーティスト不明"}</p>
                            <p className={itemSub()}>{new Date(h.created_at).toLocaleDateString("ja-JP")}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}