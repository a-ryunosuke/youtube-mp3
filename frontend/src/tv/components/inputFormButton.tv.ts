import { tv } from "tailwind-variants"

const buttonBase = "p-1 m-3 rounded-xl text-lg min-w-[80px] cursor-pointer"

export const inputFormButton = tv({
    base: "",
    slots: {
        "convertButton": buttonBase,
        "resetButton": buttonBase
    },
    variants: {
        color: {
            light: {
                convertButton: "bg-red-500 hover:bg-red-700 text-neutral-50",
                resetButton: "bg-neutral-400 hover:bg-red-500 text-neutral-50"
            },
            dark: {
                convertButton: "bg-red-500 hover:bg-red-400 text-neutral-200",
                resetButton: "bg-neutral-700 hover:bg-neutral-600 text-neutral-200"
            }
        },
        state: {
            normal: {},
            submitting: {
                convertButton: "bg-red-500 cursor-progress"
            }
        }
    },
    defaultVariants: {}
})