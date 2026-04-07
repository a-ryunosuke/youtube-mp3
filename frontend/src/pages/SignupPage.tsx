import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { DisplayColorContext } from "../context/DisplayColorContext"

import { signupLoginPage } from "../tv/pages/signupLoginPage.tv"
import { TextForm } from "../components/TextForm"
import { signupLoginSchema, type SignupLoginFormValues } from "../utils/schema"

export const SignupPage = () => {
    const navigate = useNavigate();
    const { displayColor } = useContext(DisplayColorContext)
    const { base, form, mainButton, subButton } = signupLoginPage({
        color: displayColor ? "light" : "dark",
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupLoginFormValues>({
        resolver: zodResolver(signupLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: SignupLoginFormValues) => {
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
            <form className={form()} onSubmit={handleSubmit(onSubmit)}>
                <h1>サインアップ</h1>
                <TextForm formType="email" errors={errors} placeholder="" register={register} />
                <TextForm formType="password" errors={errors} placeholder="パスワード" register={register} />
                <div>
                    <button className={mainButton()} type="submit">登録</button>
                    <Link to="/login" className={subButton()}>ログインはこちら</Link>
                </div>
            </form>
        </div>
    )
}