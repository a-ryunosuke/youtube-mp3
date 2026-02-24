import { useState } from "react"
import { useForm } from "react-hook-form"
import { schema  } from "../utils/schema"
import type { ContactFormValues } from "../utils/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { audioDownloadApi } from "../api/audioDownloadApi"
import { TextForm } from "./TextForm"
import { FormResetRhf } from "./FormResetButton"
import { InputFormButton } from "./InputFormButton."

export const Form = () => {
    const [submitStates, setSubmitStates] = useState<
    "idle" | "submitting" | "success" | "error"
    >("idle")
 
    const {
        register,
        handleSubmit,
        reset,
        getValues,
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
        setSubmitStates("submitting")
        const deleteText = getValues()

        try {
            setSubmitStates("success")
            callApi(data)
            reset({
                ...deleteText,
                youtubeUrl: "",
                fileName: ""
            })
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
            <TextForm formType="youtubeUrl" errors={errors} placeholder="https://youtu.be/" register={register} />
            <TextForm formType="fileName" errors={errors} placeholder="fileName" register={register} />
            <TextForm formType="artist" errors={errors} placeholder="artist" register={register} />
            <TextForm formType="comment" errors={errors} placeholder="comment" register={register} />
            <InputFormButton submitStates={submitStates} />
            <FormResetRhf reset={reset} />
        </form>
    )
}