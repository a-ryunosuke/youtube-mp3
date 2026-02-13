import { tv } from "tailwind-variants"

export const app = tv({
  slots: {
    base: "flex flex-col justify-center items-center h-screen transition-colors",
    frame: "p-15 flex flex-col justify-center items-center transition-colors duration-1000 rounded-xl",
    button: "flex items-center"
  },
  variants: {
    color: {
      light:{
      base: "bg-neutral-50",
      frame: "bg-neutral-200 shadow-xl"
    },
    dark: {
      base: "bg-neutral-950",
      frame: "bg-neutral-800 shadow-xl shadow-neutral-50/20"
    }},
  }
})