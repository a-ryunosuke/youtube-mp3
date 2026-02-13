import { tv } from "tailwind-variants"

export const errorList = tv({
    slots: {
        base: "flexd flex items-center justify-center absolute bg-neutral-500",
        flame: "flex flex-col",
        text: ""
    },variants: {
        color: {
            light: {
                base: "",
                text: ""
            },
            dark: {
                base: "",
                text: ""
            }
        }
    },defaultVariants: {}
})