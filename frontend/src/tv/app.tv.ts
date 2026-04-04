import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: " h-screen w-full",
  },
  variants: {
    color: {
      light: {
        base: "bg-neutral-100"
      },
      dark: {
        base: ""
      }
    },
  }
})