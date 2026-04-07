import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "min-h-screen w-full transition-colors duration-300",
  },
  variants: {
    color: {
      light: {
        base: "bg-neutral-50"
      },
      dark: {
        base: "bg-neutral-900"
      }
    },
  }
})