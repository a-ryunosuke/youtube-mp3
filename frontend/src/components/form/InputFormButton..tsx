import { useContext } from "react"
import { DisplayColorContext } from "../../context/DisplayColorContext"
import { inputFormButton } from "../../tv/components/form/inputFormButton"

type Props = {
    submitStates: string
}

export const InputFormButton = ({ submitStates }: Props) => {
    const{ displayColor } = useContext(DisplayColorContext)
    const { convertButton } = inputFormButton({
        color: displayColor ? "light" : "dark",
        state: submitStates === "submitting" ? "submitting" : "normal"
    })
    
    return (
        <button className={convertButton()} disabled={submitStates === "submitting"}>
            {submitStates === "submitting" ? "送信中" : "送信する"}
        </button>
    )
}