import { tv } from "tailwind-variants"

const buttonBase = "p-1 m-3 border-2 rounded-xl text-lg min-w-[80px] cursor-pointer"

export const inputFormButton = tv({
    base: "",
    slots: {
        "convertButton": buttonBase,
        "resetButton": buttonBase
    },
    variants: {
        color: {
            light: {
                convertButton: "border-red-400 bg-red-500 hover:bg-red-700 text-neutral-50",
                resetButton: "border-red-400 bg-neutral-300 hover:bg-red-500 text-neutral-50"
            },
            dark: {
                convertButton: "border-neutral-950 bg-red-600 hover:bg-red-500 text-neutral-200 shadow-xl shadow-red-500/20",
                resetButton: "border-neutral-950 bg-neutral-700 hover:bg-neutral-800 text-neutral-200 shadow-xl shadow-red-500/20"
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