import { tv } from "tailwind-variants"

const buttonBase = "p-1 m-3 border-2 rounded-xl text-lg"

export const button = tv({
    // base: "p-1 m-1 border-2 rounded-xl",
    slots: {
        "noConvert": buttonBase,
        "convert": buttonBase,
        "resetButton": buttonBase
    },
    variants: {
        color: {
            light: {
                noConvert: "border-red-600 bg-red-600 hover:bg-red-500 text-neutral-50",
                convert: "border-red-600 bg-red-500 text-neutral-50 cursor-progress",
                resetButton: "border-red-600 bg-red-600 hover:bg-red-700 text-neutral-50"
            },
            dark: {
                noConvert: "border-neutral-950 bg-red-600 hover:bg-red-500 text-neutral-200 shadow-xl shadow-red-500/20",
                convert: "border-neutral-950 bg-red-500 text-neutral-200 cursor-progress",
                resetButton: "border-neutral-950 bg-red-600 hover:bg-red-700 text-neutral-200 shadow-xl shadow-red-500/20"
            }
        }
    },
    defaultVariants: {}
})