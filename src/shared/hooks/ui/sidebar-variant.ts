import { cva } from "class-variance-authority";

export const sidebarVariants = cva("h-screen bg-background border-r", {
  variants: {
    position: {
      left: "left-0",
      right: "right-0",
    },
    size: {
      default: "w-64",
      sm: "w-48",
      lg: "w-80",
    },
  },
  defaultVariants: {
    position: "left",
    size: "default",
  },
});
