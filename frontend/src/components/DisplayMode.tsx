import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { displayMode } from "../tv/components/displayMode.tv"

export const DisplayMode = () => {
    const { displayColor, setDisplayColor } = useContext(DisplayColorContext)
    const { wrapper, knob } = displayMode({
        color: displayColor ? "light" : "dark"
    })
    
    return (
        <label className={wrapper()} onClick={() => setDisplayColor(!displayColor)}>
            <span className={knob()}></span>
        </label>
    )
}