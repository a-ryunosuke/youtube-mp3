import { tv } from "tailwind-variants"

export const historyButton = tv({
    slots: {
        base: "flex justify-end ml-auto translate-x-[20px]",
        button: "mx-2 p-2 min-w-[70px] rounded-bl-xl"
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "text-white bg-neutral-400 hover:bg-red-500",
            },
            dark: {
                base: "",
                button: "",
            }
        }
    }
})