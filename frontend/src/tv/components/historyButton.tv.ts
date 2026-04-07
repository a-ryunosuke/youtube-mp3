import { tv } from "tailwind-variants"

export const historyButton = tv({
    slots: {
        base: "flex justify-end ml-auto translate-x-[20px]",
        button: "bg-orange-300 hover:bg-neutral-600 text-white mx-2 p-2 min-w-[70px] rounded-bl-xl"
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