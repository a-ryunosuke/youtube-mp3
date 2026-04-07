import { tv } from "tailwind-variants"

export const header = tv({
    base: "",
    slots: {
        base: "ml-3 p-3 min-h-[50px] rounded-bl-xl flex justify-between items-center cursor-pointer",
        text: "",
        button: "flex justify-center items-center p-1 rounded-xl border-2 min-h-[40px] min-w-[80px] cursor-pointer"
    },
    variants: {
        color: {
            light: {
                base: "bg-red-500",
                text: "text-gray-50",
                button: "text-gray-50 bg-red-400 border-red-400"
            },
            dark: {
                base: "bg-neutral-800",
                text: "text-neutral-50",
                button: "text-neutral-50 bg-red-500 border-red-500"
            }
        }
    }
})