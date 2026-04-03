import { tv } from "tailwind-variants"

export const header = tv({
    slots: {
        base: "bg-blue-500 m-1",
        text: "text-red-500",
    },
    variants: {
        color: {
            light: {
                base: "",
                text: "",
            },
            // dark: {
            //     base: "",
            //     text: "",
            // }
        }
    }
})