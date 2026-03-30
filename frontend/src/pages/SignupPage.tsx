import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"

type FormData = {
    email: string;
    password: string;
}

export const SignupPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();

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
        <div>
            <h2>サインアップ</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email" placeholder="メールアドレス" />
                <input {...register("password")} type="password" />
                <button type="submit">登録</button>
            </form>
            <Link to="/login">ログインはこちら</Link>
        </div>
    )
}