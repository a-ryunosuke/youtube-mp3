import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

type FormData = {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async(data: FormData) => {
        try {
            const res = await fetch("http://localhost:5000/api/posts/login", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(data),
            })
            const json = await res.json()
            if(!res.ok) throw new Error(json.message);

            // tokenをContextに保存
            login(json.token);
            // メインページへ移動
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div>
            <h2>ログイン</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" placeholder="メールアドレス" />
                <input {...register("password")} type="password" placeholder="パスワード" />
                <button type="submit">ログイン</button>
            </form>
            <Link to="/signup">アカウント作成</Link>
        </div>
    )
}