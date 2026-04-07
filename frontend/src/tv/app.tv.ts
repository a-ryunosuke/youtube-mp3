import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "min-h-screen w-full transition-colors duration-300",
  },
  variants: {
    color: {
      light: {
        base: "bg-gray-50"
      },
      dark: {
        base: "bg-gray-900"
      }
    },
  }
})