import { tv } from "tailwind-variants"

export const textForm = tv({
    slots: {
        "base": "p-1",
        "label": "text-lg",
        "input": "flex items-center justify-center border-2 rounded-xl outline-none focus:shadow-xl duration-1000"
    },

    variants: {
        color: {
            "light": {
                "label": "text-neutral-700",
                "input": "border-neutral-50 bg-neutral-100 border-solid focus:shadow-red-950/20"
                
            },
            "dark": {
                "label": "text-neutral-300",
                "input": "border-neutral-200 bg-neutral-300 border-solid focus:shadow-neutral-50/20"
            }

        }
    },
    defaultVariants: {}
})