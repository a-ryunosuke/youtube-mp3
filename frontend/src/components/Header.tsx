import { Link } from "react-router-dom"
import { useContext } from "react"
import { useAuth } from "../context/AuthContext"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { header } from "../tv/components/header.tv"

export const Header = ({ handleHistoryClick }: { handleHistoryClick: () => void }) => {
    const { isLoggedIn, logout } = useAuth();
    const { displayColor } = useContext(DisplayColorContext)
    const { base, text, button } = header({ color: displayColor ? "light" : "dark" })

    return (
        <div className={base()}>
            <h1 className={text()}><Link to="/">MP3 Converter</Link></h1>
            <div className="flex">
                {isLoggedIn ?
                    <button className={button()} onClick={handleHistoryClick}>履歴</button>
                    :
                    <></>
                }
                {isLoggedIn ? (
                    <button className={button()} onClick={logout}>Log Out</button>
                ) : (
                    <div className={button()}>
                        <Link to="/login">Log In</Link>
                    </div>
                )}
            </div>
        </div>
    )
}