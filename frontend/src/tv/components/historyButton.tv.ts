import { tv } from "tailwind-variants"

export const historyButton = tv({
    slots: {
        base: "flex justify-end ml-auto",
        button: "border-b-2 border-neutral-400 hover:bg-gray-600 text-neutral-400 font-bold py-2 px-4"
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "",
            },
            dark: {
                base: "",
                button: "",
            }
        }
    }
})