import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: " h-screen w-full",
  },
  variants: {
    color: {
      light: {
        base: "bg-red-100"
      },
      dark: {
        base: ""
      }
    },
  }
})