import { useState } from "react"
import { useForm } from "react-hook-form"

import { callApi } from "../utils/callApi"
import { schema  } from "../utils/schema"
import type { ContactFormValues } from "../utils/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextForm } from "./TextForm"
import { FormResetRhf } from "./FormResetButton"
import { InputFormButton } from "./InputFormButton"

export const Form = () => {
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
        setSubmitStates("submitting")

        try {
            await callApi(data)
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