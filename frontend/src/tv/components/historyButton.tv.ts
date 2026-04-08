import { tv } from "tailwind-variants"

export const historyButton = tv({
    slots: {
        base: "flex justify-end ml-auto translate-x-[10px]",
        button: "mx-2 p-2 min-w-[70px] rounded-bl-xl"
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "text-neutral-50 bg-neutral-400 hover:bg-neutral-600",
            },
            dark: {
                base: "",
                button: "text-neutral-300 bg-neutral-700 hover:bg-neutral-600",
            }
        }
    }
})