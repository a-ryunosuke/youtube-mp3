import { tv } from "tailwind-variants"

export const mainPage = tv({
    slots: {
        base: "flex flex-col justify-center items-center mt-1 ml-5 mr-5 rounded-2xl shadow-xl",
        form: "p-10"
    },
    variants: {
        color: {
            light: {
                base: "bg-blue-500/80",
                form: "",
            },
            dark: {
                base: "bg-blue-900",
                form: "",
            }
        },
    }
})