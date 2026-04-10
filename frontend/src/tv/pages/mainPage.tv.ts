import { tv } from "tailwind-variants"

export const mainPage = tv({
    slots: {
        base: "flex justify-center items-center flex-col",
        form: "m-10 p-10 border-2 rounded-xl"
    },
    variants: {
        color: {
            light: {
                base: "",
                form: "bg-neutral-50 border-neutral-300",
            },
            dark: {
                base: "",
                form: "bg-neutral-900 border-neutral-800",
            }
        },
    }
})