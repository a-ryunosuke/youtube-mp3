import { tv } from "tailwind-variants"

export const header = tv({
    base: "",
    slots: {
        base: "ml-1 mr-1 p-3 min-h-[50px] rounded-b-xl flex justify-between items-center cursor-pointer",
        text: "",
        button: "flex justify-center items-center p-1 rounded-xl border-2 min-h-[40px] min-w-[80px] cursor-pointer"
    },
    variants: {
        color: {
            light: {
                base: "bg-red-500",
                text: "text-white",
                button: "text-white bg-red-400 border-red-400"
            },
            dark: {
                base: "bg-gray-800",
                text: "",
                button: ""
            }
        }
    }
})