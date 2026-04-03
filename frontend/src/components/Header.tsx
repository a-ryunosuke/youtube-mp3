import { Link } from "react-router-dom"
import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { header } from "../tv/components/header.tv"

export const Header = () => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, text } = header({ color: displayColor ? "light" : "dark" })
    return (
        <div className={base()}>
            <h1 className={text()}>MP3 Converter</h1>
            <Link to="/login">ログイン</Link>
        </div>
    )
}