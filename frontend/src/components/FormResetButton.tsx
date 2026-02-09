import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { button } from "../tv/components/button.tv"

type Props = {
    reset: () => void
}

export const FormResetButton = ({ reset }: Props) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { resetButton } = button({
        color: displayColor ? "light" : "dark"
    })
    
    const formTextReset = () => {
        reset()
    }
    return (
        <button className={resetButton()} onClick={formTextReset}>RST</button>
    )
}