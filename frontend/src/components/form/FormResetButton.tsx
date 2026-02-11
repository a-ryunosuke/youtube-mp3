import { useContext } from "react"
import { DisplayColorContext } from "../../context/DisplayColorContext"
import { inputFormButton } from "../../tv/components/form/inputFormButton"


type Props = {
    reset: () => void
}

export const FormResetRhf = ({ reset }: Props) => {
    const{ displayColor } = useContext(DisplayColorContext)
    const { resetButton } = inputFormButton({
        color: displayColor ? "light" : "dark",
    })
    
    return (
        <button className={resetButton()} onClick={() => reset()}>RESET</button>
    )
}