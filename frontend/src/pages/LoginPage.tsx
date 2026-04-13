import { useNavigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext"
import { type SignupLoginFormValues } from "../utils/schema"

import { SignupLogin } from "../components/SignupLogin";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

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
        <SignupLogin
            onSubmit={onSubmit}
            title="ログイン"
            emailPlaceholder="メールアドレス"
            passwordPlaceholder="パスワード"
            mainButtonText="ログイン"
            subButtonText="アカウント作成"
            linkTo="/signup"
        />
    )
}