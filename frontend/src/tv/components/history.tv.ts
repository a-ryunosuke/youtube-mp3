import { tv } from "tailwind-variants"

export const historyDrawer = tv({
  slots: {
    overlay: "fixed inset-0 z-40 transition-opacity duration-300",
    drawer: "fixed top-0 right-0 h-full w-80 z-50 shadow-xl transition-transform duration-300 overflow-y-auto p-6 flex flex-col gap-4",
    title: "text-lg font-bold mb-2",
    item: "rounded-lg p-4 flex flex-col gap-1 text-sm",
    itemLabel: "font-semibold truncate",
    itemSub: "text-xs opacity-60 truncate",
    closeButton: "self-end mb-4 text-sm opacity-60 hover:opacity-100 transition-opacity",
  },
  variants: {
    color: {
      light: {
        overlay: "bg-black/20",
        drawer: "bg-neutral-200",
        item: "bg-neutral-50",
      },
      dark: {
        overlay: "bg-black/50",
        drawer: "bg-neutral-800",
        item: "bg-neutral-700",
      }
    },
    open: {
      true: {
        overlay: "opacity-100 pointer-events-auto",
        drawer: "translate-x-0",
      },
      false: {
        overlay: "opacity-0 pointer-events-none",
        drawer: "translate-x-full",
      }
    }
  }
})