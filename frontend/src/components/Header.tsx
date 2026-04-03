import { Link } from "react-router-dom"
import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { header } from "../tv/components/header.tv"
import { useAuth } from "../context/AuthContext"

export const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    const { displayColor } = useContext(DisplayColorContext)
    const { base, text, button } = header({ color: displayColor ? "light" : "dark" })
    return (
        <div className={base()}>
            <h1 className={text()}>MP3 Converter</h1>
            <>
                {isLoggedIn ? (
                    <button onClick={logout} className={button()}>ログアウト</button>
                ) : (
                    <Link to="/login" className={button() + text()}>ログイン</Link>
                )}
            </>
        </div>
    )
}