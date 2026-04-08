import { tv } from "tailwind-variants"

export const textForm = tv({
    base: "p-1",
    slots: {
        "label": "text-lg",
        "input": "flex items-center justify-center border-b-2 border-solid outline-none focus:shadow-xl duration-1000",
        "error": "flex justify-end text-red-600 text-sm min-h-[1.25rem] leading-tight",
    },

    variants: {
        color: {
            "light": {
                "label": "text-neutral-700",
                "input": "border-neutral-500 focus:border-red-950"

            },
            "dark": {
                "label": "text-neutral-300",
                "input": "border-neutral-700 placeholder:text-neutral-700 focus:border-neutral-300"
            }

        }
    },
    defaultVariants: {}
})