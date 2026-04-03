import { tv } from "tailwind-variants"

export const signupLoginPage = tv({
    slots: {
        base: "",
        button: "rounded-xl p-2 m-1",
        form: "rounded-xl p-1 m-1 border-2"
    },
    variants: {
        color: {
            light: {
                base: "",
                button: "bg-blue-500 text-white",
                form: "border-blue-600"
            },
            // dark: {
            //     base: "",
            //     button: ""
            // }
        },
    }
})