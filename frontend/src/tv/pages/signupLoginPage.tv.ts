import { tv } from "tailwind-variants"

export const signupLoginPage = tv({
    slots: {
        base: "flex flex-col justify-center items-center",
        signupButton: "rounded-xl p-2 m-1",
        loginButton: "rounded-xl p-2 m-1",
    },
    variants: {
        color: {
            light: {
                signupButton: "bg-red-500 text-white hover:bg-red-700",
                loginButton: "bg-red-500 text-white hover:bg-red-700",
            },
            dark: {
                signupButton: "",
                loginButton: "",
            }
        },
    }
})