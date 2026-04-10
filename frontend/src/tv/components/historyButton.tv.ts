import { tv } from "tailwind-variants"

export const historyButton = tv({
    slots: {
        base: "flex justify-end ml-auto translate-x-[20px]",
        button: "mx-2 mt-2 p-2 min-w-[70px] rounded-l-xl border-2"
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "text-neutral-900 bg-neutral-100 border-neutral-300 hover:bg-neutral-600",
            },
            dark: {
                base: "",
                button: "text-neutral-300 bg-neutral-900 border-neutral-800 hover:bg-neutral-600",
            }
        }
    }
})