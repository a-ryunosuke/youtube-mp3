import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <h1>MP3 Converter</h1>
            <Link to="/login">ログイン</Link>
            <Link to="/signup">サインアップ</Link>
        </div>
    )
}