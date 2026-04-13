import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { DisplayColorContext } from "../context/DisplayColorContext"
import { signupLoginSchema, type SignupLoginFormValues } from "../utils/schema"

import { TextForm } from "../components/InputText"

import { signupLoginPage } from "../tv/pages/signupLoginPage.tv"

type Props = {
    onSubmit: (data: SignupLoginFormValues) => void;
    title: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    mainButtonText: string;
    subButtonText: string;
    linkTo: string;
}

export const SignupLogin = ({
    onSubmit, title, emailPlaceholder, passwordPlaceholder,
    mainButtonText, subButtonText, linkTo
}: Props) => {
    const { displayColor } = useContext(DisplayColorContext)
    const { base, form, h1, mainButton, subButton } = signupLoginPage({
        color: displayColor ? "light" : "dark",
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupLoginFormValues>({
        resolver: zodResolver(signupLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    return (
        <div className={base()}>
            <form className={form()} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={h1()}>{title}</h1>
                <TextForm formType="email" errors={errors} placeholder={emailPlaceholder} register={register} />
                <TextForm formType="password" errors={errors} placeholder={passwordPlaceholder} register={register} />
                <div>
                    <button className={mainButton()} type="submit">{mainButtonText}</button>
                    <Link to={linkTo} className={subButton()}>{subButtonText}</Link>
                </div>
            </form>
        </div>
    )
}