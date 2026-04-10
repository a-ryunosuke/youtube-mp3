import { tv } from "tailwind-variants"

export const header = tv({
    base: "",
    slots: {
        base: "min-h-[50px] border-b-2 flex justify-between items-center cursor-pointer",
        text: "pl-3",
        button: "flex p-3 justify-center items-center border-l-2 min-h-[40px] min-w-[80px] cursor-pointer"
    },
    variants: {
        color: {
            light: {
                base: "bg-neutral-50 border-neutral-300",
                text: "text-neutral-900",
                button: "text-neutral-900 bg-neutral-50 border-neutral-300"
            },
            dark: {
                base: "bg-neutral-900 border-neutral-800",
                text: "text-neutral-50",
                button: "text-neutral-300 bg-neutral-900 border-neutral-800"
            }
        }
    }
})