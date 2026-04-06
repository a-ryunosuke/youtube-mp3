import { tv } from "tailwind-variants"

export const signupLoginPage = tv({
    slots: {
        base: "flex justify-center items-center flex-col",
        form: "p-10",
        mainButton: "rounded-xl p-2 m-1",
        subButton: "border-b-2 p-2 m-1",
    },
    variants: {
        color: {
            light: {
                mainButton: "bg-red-500 text-white hover:bg-red-700",
                subButton: "text-red-500 border-neutral-500",
            },
            dark: {
                mainButton: "",
                subButton: "",
            }
        },
    }
})