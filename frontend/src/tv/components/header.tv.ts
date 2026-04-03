import { tv } from "tailwind-variants"

export const header = tv({
    slots: {
        base: "bg-blue-500 ml-1 mr-1 p-3 rounded-b-xl flex justify-between text-size-xl text-red-500",
        text: "",
        button: ""
    },
    variants: {
        color: {
            light: {
                base: "",
                text: "",
                button: ""
            },
            // dark: {
            //     base: "",
            //     text: "",
            // }
        }
    }
})