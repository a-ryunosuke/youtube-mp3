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
                button: "text-gray-50 bg-gray-400 hover:bg-gray-600",
            },
            dark: {
                base: "",
                button: "text-gray-50 bg-gray-600 hover:bg-gray-500",
            }
        }
    }
})