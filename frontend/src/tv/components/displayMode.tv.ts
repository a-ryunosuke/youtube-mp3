import { tv } from "tailwind-variants"

export const displayMode = tv({
    slots: {
        wrapper: "relative rounded-full w-16 h-8 transition-colors",
        knob: "absolute rounded-full w-7 h-7 top-0.5 transition-all duration-200"
    },
    
    variants: {
        color: {
            light: {
                wrapper: "bg-neutral-50",
                knob: "bg-neutral-200 left-1 hover:left-0"
            },
            dark: {
                wrapper: "bg-neutral-900",
                knob: "bg-neutral-600 left-8 hover:left-8.5"
            }
        }
    }
})