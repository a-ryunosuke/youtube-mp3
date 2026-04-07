import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"

import { historyButton } from "../tv/components/historyButton.tv"

type Props = {
    isLoggedIn: boolean
    handleHistoryClick: () => void
}

export const HistoryButton = ({ isLoggedIn, handleHistoryClick }: Props) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, button } = historyButton({ color: displayColor ? "light" : "dark" })
    return (
        <div className={base()}>
            {isLoggedIn ? (
                <button className={button()} onClick={handleHistoryClick}>履歴</button>
            ) : (
                <></>
            )}
        </div>
    )
}