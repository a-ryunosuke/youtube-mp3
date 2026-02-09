import { useState } from "react"
import { useForm } from "react-hook-form"
import { schema  } from "../../utils/schema"
import type { ContactFormValues } from "../../utils/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { audioDownloadApi } from "../../api/audioDownloadApi"
import { InputForm } from "./InputForm"
import { FormResetRhf } from "../FormResetRhf "

export const InputFormRhf = () => {
    const [submitStates, setSubmitStates] = useState<
    "idle" | "submitting" | "success" | "error"
    >("idle")
 
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


    const onSubmit = async(data: ContactFormValues) => {
        console.log(data.artist)
        setSubmitStates("submitting")

        try {
            setSubmitStates("success")
            callApi(data)
            reset()
        } catch (error) {
            setSubmitStates("error")
        }
    }

    const callApi = async ( data: ContactFormValues) => {
        const { youtubeUrl, fileName, artist, comment } = data
        
        try {
            const blob = await audioDownloadApi({
                youtubeUrl,
                fileName,
                title: fileName,   // ← title に fileName を入れるのは意図的？
                artist,
                comment
            });
    
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${fileName || "audio"}.mp3`;  // null/空対策
            document.body.appendChild(a);               // ← これがないとSafariなどで動かないことがある
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("ダウンロード失敗", err);
            throw err;  // 上位でエラー処理したい場合は
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm formType="youtubeUrl" errors={errors} register={register} />
            <InputForm formType="fileName" errors={errors} register={register} />
            <InputForm formType="artist" errors={errors} register={register} />
            <InputForm formType="comment" errors={errors} register={register} />
            <button type="submit" disabled={submitStates === "submitting"} >
                {submitStates === "submitting" ? "送信中" : "送信する"}
            </button>
            <FormResetRhf reset={reset} />
        </form>
    )
}