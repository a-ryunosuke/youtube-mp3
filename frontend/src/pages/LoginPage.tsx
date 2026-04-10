import { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { DisplayColorContext } from "../context/DisplayColorContext"
import { signupLoginPage } from "../tv/pages/signupLoginPage.tv"
import { TextForm } from "../components/InputText"
import { signupLoginSchema, type SignupLoginFormValues } from "../utils/schema"

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const { displayColor } = useContext(DisplayColorContext)
    const { base, h1, form, mainButton, subButton } = signupLoginPage({
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
            <form className={form()} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={h1()}>ログイン</h1>
                <TextForm formType="email" errors={errors} placeholder="メールアドレス" register={register} />
                <TextForm formType="password" errors={errors} placeholder="パスワード" register={register} />
                <div>
                    <button className={mainButton()} type="submit">ログイン</button>
                    <Link to="/signup" className={subButton()}>アカウント作成</Link>
                </div>
            </form>
        </div>
    )
}