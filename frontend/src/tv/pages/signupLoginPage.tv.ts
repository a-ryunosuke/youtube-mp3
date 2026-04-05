import { tv } from "tailwind-variants"

export const signupLoginPage = tv({
    slots: {
        base: "",
        button: "rounded-xl p-2 m-1",
        form: "flex flex-col justify-center items-center",
        input: "border-b-2 border-red-400",
        label: ""
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "bg-red-500 text-white hover:bg-red-700",
                form: "border-red-600",
                input: "",
                label: ""
            },
            dark: {
                base: "",
                button: "",
                form: "",
                input: "",
                label: ""
            }
        },
    }
})