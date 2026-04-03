import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "bg-neutral-500 h-screen w-full",
    frame: "bg-neutral-200 p-4 m-4",
    button: ""
  },
  variants: {
    color: {
      light: {
        base: "",
        frame: ""
      },
      dark: {
        base: "",
        frame: ""
      }
    },
  }
})