import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "bg-neutral-100 h-screen w-full",
    frame: "bg-neutral-200 p-4 mt-1 mr-1 ml-1 rounded-xl",
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