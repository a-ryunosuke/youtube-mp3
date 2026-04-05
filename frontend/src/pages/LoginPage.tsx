import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useContext } from "react"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { signupLoginPage } from "../tv/pages/signupLoginPage.tv"
import { textForm } from "../tv/components/textForm.tv"

type FormData = {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const { login } = useAuth();
    const navigate = useNavigate();

    const { displayColor } = useContext(DisplayColorContext)
    const { base, button } = signupLoginPage({
        color: displayColor ? "light" : "dark",
    })
    const { label, input, error } = textForm({
        color: displayColor ? "light" : "dark",
    })

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch("http://localhost:5000/api/posts/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json.message);

            // tokenをContextに保存
            login(json.token);
            // メインページへ移動
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className={base()}>
            <h2 >ログイン</h2>
            <form className={base()} onSubmit={handleSubmit(onSubmit)}>
                <label className={label()} htmlFor="email">メールアドレス</label>
                <input className={input()} {...register("email")} type="email" placeholder="メールアドレス" />
                <label className={label()} htmlFor="password">パスワード</label>
                <input className={input()} {...register("password")} type="password" placeholder="パスワード" />
                <button className={button()} type="submit">ログイン</button>
                <Link to="/signup" className={button()}>アカウント作成</Link>
            </form>
        </div>
    )
}