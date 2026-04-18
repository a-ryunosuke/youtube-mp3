import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useAuth } from "../context/AuthContext"
import { DisplayColorContext } from "../context/DisplayColorContext"

import { callApi } from "../api/callApi"
import { schema } from "../utils/schema"
import type { ContactFormValues } from "../utils/schema"
import { downloadFile } from "../utils/downloadFile"

import { TextForm } from "../components/InputText"
import { FormResetRhf } from "../components/FormResetButton"
import { InputFormButton } from "../components/InputFormButton"

import { mainPage } from "../tv/pages/mainPage.tv"

export const MainPage = () => {
    const [submitStates, setSubmitStates] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle")
    const { token } = useAuth();

    const { displayColor } = useContext(DisplayColorContext)
    const { base, form } = mainPage({
        color: displayColor ? "light" : "dark"
    })

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
            const blob = await callApi({ payload: data, token })

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

    return (
        <div className={base()}>
            <div className={form()}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextForm formType="youtubeUrl" errors={errors} placeholder="https://youtu.be/" register={register} />
                    <TextForm formType="fileName" errors={errors} placeholder="fileName" register={register} />
                    <TextForm formType="artist" errors={errors} placeholder="artist" register={register} />
                    <TextForm formType="comment" errors={errors} placeholder="comment" register={register} />
                    <InputFormButton submitStates={submitStates} />
                    <FormResetRhf reset={reset} />
                </form>
            </div>
        </div>
    )
}