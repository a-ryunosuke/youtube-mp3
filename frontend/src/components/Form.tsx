import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"

import { callApi } from "../utils/callApi"
import { schema } from "../utils/schema"
import type { ContactFormValues } from "../utils/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextForm } from "./TextForm"
import { FormResetRhf } from "./FormResetButton"
import { InputFormButton } from "./InputFormButton"
import { HistoryDrawer } from "./HistoryDrawer"
import { useNavigate } from "react-router-dom"

export const Form = () => {
    const [submitStates, setSubmitStates] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle")
    const { token, isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            youtubeUrl: "",
            fileName: "",
            artist: "",
            comment: ""
        },
    })

    const onSubmit = async (data: ContactFormValues) => {
        setSubmitStates("submitting")
        try {
            const blob = await callApi(data, token)

            // blobをダウンロードさせる処理
            // blobから一時的なURLを作成
            const url = window.URL.createObjectURL(blob)
            // aタグを作成
            const a = document.createElement("a")
            a.href = url

            // ユーザーが入力した値で保存
            // download属性＝保存時のファイル名指定
            a.download = `${data.fileName || "audio"}.mp3`;
            document.body.appendChild(a);
            // aタグを自動的にクリック→ダウンロード開始
            a.click();
            // 使用済みaタグ削除
            a.remove();
            window.URL.revokeObjectURL(url);

            setSubmitStates("success")
            reset({
                youtubeUrl: "",
                fileName: ""
            })
        } catch (error) {
            setSubmitStates("error")
        }
    }

    // drawer
    const handleHistoryClick = () => {
        if (!isLoggedIn) {
            // 未ログインならログインページ
            navigate("/login")
        } else {
            setIsDrawerOpen(true)
        }
    }

    return (
        <div>
            <div className="flex justify-end gap-2 mb-4 w-full">
                {isLoggedIn ? (
                    <>
                        <button onClick={handleHistoryClick}>履歴</button>
                        <button onClick={logout}>ログアウト</button>
                    </>
                ) : (
                    <button onClick={() => navigate("/login")}>ログイン</button>
                )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextForm formType="youtubeUrl" errors={errors} placeholder="https://youtu.be/" register={register} />
                <TextForm formType="fileName" errors={errors} placeholder="fileName" register={register} />
                <TextForm formType="artist" errors={errors} placeholder="artist" register={register} />
                <TextForm formType="comment" errors={errors} placeholder="comment" register={register} />
                <InputFormButton submitStates={submitStates} />
                <FormResetRhf reset={reset} />
            </form>
            <HistoryDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    )
}