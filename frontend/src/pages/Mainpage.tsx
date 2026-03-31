import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

import { callApi } from "../utils/callApi"
import { schema } from "../utils/schema"
import type { ContactFormValues } from "../utils/schema"
import { downloadFile } from "../utils/downloadFile"

import { TextForm } from "../components/TextForm"
import { FormResetRhf } from "../components/FormResetButton"
import { InputFormButton } from "../components/InputFormButton"
import { HistoryDrawer } from "../components/HistoryDrawer"

export const MainPage = () => {
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

            downloadFile(blob, data.fileName)

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