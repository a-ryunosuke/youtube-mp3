import { tv } from "tailwind-variants"

export const historyDrawer = tv({
  slots: {
    overlay: "fixed inset-0 z-40 transition-opacity duration-400",
    drawer: "fixed top-[50px] right-0 h-full w-80 z-50 transition-transform duration-300 overflow-y-auto p-6 flex flex-col gap-4",
    title: "text-lg font-bold mb-2",
    item: "relative rounded-lg p-4 flex flex-col gap-1 text-sm",
    itemLabel: "font-semibold",
    itemText: "text-xs opacity-60",
    closeButton: "self-end mb-4 text-sm opacity-60 hover:opacity-100 transition-opacity",
    deleteButton: "absolute -top-4 -right-1 text-sm opacity-60 text-2xl hover:opacity-100",
  },
  variants: {
    color: {
      light: {
        overlay: "bg-black/20",
        drawer: "bg-neutral-200",
        title: "text-neutral-900",
        item: "bg-neutral-50",
        itemLabel: "text-neutral-900",
        itemText: "text-neutral-500",
        closeButton: "text-neutral-900",
        deleteButton: "text-neutral-900",
      },
      dark: {
        overlay: "bg-black/50",
        drawer: "bg-neutral-900",
        title: "text-neutral-100",
        item: "bg-neutral-800",
        itemLabel: "text-neutral-100",
        itemText: "text-neutral-300",
        closeButton: "text-neutral-300",
        deleteButton: "text-neutral-300",
      }
    },
    open: {
      true: {
        overlay: "opacity-100 pointer-events-auto",
        drawer: "",
      },
      false: {
        overlay: "opacity-0 pointer-events-none",
        drawer: "translate-x-full",
      }
    }
  }
})  