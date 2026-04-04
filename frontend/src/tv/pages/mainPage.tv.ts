import { tv } from "tailwind-variants"

export const mainPage = tv({
    slots: {
        base: "flex justify-center items-center flex-col",
        form: "p-10"
    },
    variants: {
        color: {
            light: {
                base: "",
                form: "",
            },
            dark: {
                base: "",
                form: "",
            }
        },
    }
})