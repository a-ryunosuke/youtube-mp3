import { useNavigate } from "react-router-dom"

import { type SignupLoginFormValues } from "../utils/schema"

import { SignupLogin } from "../components/SignupLogin";

export const SignupPage = () => {
    const navigate = useNavigate();

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
        <SignupLogin
            onSubmit={onSubmit}
            title="サインアップ"
            emailPlaceholder="メールアドレス"
            passwordPlaceholder="パスワード"
            mainButtonText="登録"
            subButtonText="ログインはこちら"
            linkTo="/login"
        />
    )
}