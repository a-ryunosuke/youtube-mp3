import { tv } from "tailwind-variants"

export const signupLoginPage = tv({
    slots: {
        base: "flex justify-center items-center flex-col",
        form: "m-10 p-10 border-2 rounded-xl",
        h1: "",
        mainButton: "rounded-xl p-2 m-1",
        subButton: "p-2 m-1",
    },
    variants: {
        color: {
            light: {
                h1: "text-neutral-50",
                form: "border-neutral-300",
                mainButton: "bg-red-500 text-white hover:bg-red-700",
                subButton: "text-red-500",
            },
            dark: {
                h1: "text-neutral-200",
                form: "border-neutral-800",
                mainButton: "bg-red-500 text-neutral-200 hover:bg-red-400",
                subButton: "text-neutral-400",
            }
        },
    }
})