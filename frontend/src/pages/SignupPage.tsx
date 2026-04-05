import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"

import { DisplayColorContext } from "../context/DisplayColorContext"

import { signupLoginPage } from "../tv/pages/signupLoginPage.tv"
import { textForm } from "../tv/components/textForm.tv"

type FormData = {
    email: string;
    password: string;
}

export const SignupPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();
    const { displayColor } = useContext(DisplayColorContext)
    const { base, button } = signupLoginPage({
        color: displayColor ? "light" : "dark",
    })
    const { label, input, error } = textForm({
        color: displayColor ? "light" : "dark",
    })

    // この一連の流れは何？非同期なのはわかる
    const onSubmit = async (data: FormData) => {
        try {
            // backendのsignupにメールとパスワードをPOST送信
            const res = await fetch("http://localhost:5000/api/posts/signup", {
                method: "POST",
                // json方式で送信
                headers: { "Content-Type": "application/json" },
                // javascriptオブジェクトからjsonに変換
                body: JSON.stringify(data),
            });

            // レスポンスをjavascriptオブジェクトに変換
            const json = await res.json();
            // falseならcatchに
            if (!res.ok) throw new Error(json.message);

            // 登録後ログインページへ
            // navigate=指定したリンクへ誘導
            navigate("/login")
        } catch (err) {
            //  接続できなかったらエラー表示
            console.log(err)
        }
    }

    return (
        <div className={base()}>
            <h2>サインアップ</h2>
            <form className={base()} onSubmit={handleSubmit(onSubmit)}>
                <label className={label()} htmlFor="email">メールアドレス</label>
                <input className={input()} {...register("email")} type="email" placeholder="メールアドレス" />
                <label className={label()} htmlFor="password">パスワード</label>
                <input className={input()} {...register("password")} type="password" placeholder="パスワード" />
                <button className={button()} type="submit">登録</button>
                <Link to="/login" className={button()}>ログインはこちら</Link>
            </form>
        </div>
    )
}