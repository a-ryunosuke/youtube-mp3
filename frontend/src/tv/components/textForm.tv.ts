import { tv } from "tailwind-variants"

export const textForm = tv({
    slots: {
        "base": "p-1",
        "label": "text-lg",
        "input": "flex items-center justify-center border-b-2 border-solid outline-none focus:shadow-xl duration-1000",
        "error": "flex justify-end text-red-600 text-sm min-h-[1.25rem] leading-tight",
    },

    variants: {
        color: {
            "light": {
                "label": "text-neutral-700",
                "input": "border-neutral-500 focus:shadow-red-950/20"

            },
            "dark": {
                "label": "",
                "input": "border-neutral-200 focus:shadow-neutral-50/20"
            }

        }
    },
    defaultVariants: {}
})