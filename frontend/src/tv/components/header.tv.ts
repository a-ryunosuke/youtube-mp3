import { tv } from "tailwind-variants"

export const header = tv({
    slots: {
        base: "ml-1 mr-1 p-3 rounded-b-xl flex justify-between text-size-xl cursor-pointer",
        text: "text-white",
        button: "text-white border-2 border-blue-400 bg-blue-400 rounded-xl p-2"
    },
    variants: {
        color: {
            light: {
                base: "bg-blue-500",
                text: "",
                button: ""
            },
            dark: {
                base: "bg-gray-800",
                text: "",
                button: ""
            }
        }
    }
})