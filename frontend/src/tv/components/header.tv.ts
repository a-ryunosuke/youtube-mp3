import { tv } from "tailwind-variants"

export const header = tv({
    slots: {
        base: "ml-1 mr-1 p-3 rounded-b-xl flex justify-between text-size-xl cursor-pointer",
        text: "",
        button: "border-2 rounded-xl p-2"
    },
    variants: {
        color: {
            light: {
                base: "bg-red-500",
                text: "text-white",
                button: "text-white border-red-400 bg-red-400"
            },
            dark: {
                base: "bg-gray-800",
                text: "",
                button: ""
            }
        }
    }
})