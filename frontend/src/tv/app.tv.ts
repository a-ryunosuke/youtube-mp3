import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "bg-neutral-50",
    frame: "bg-neutral-200",
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