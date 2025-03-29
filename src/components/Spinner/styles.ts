import { cva } from "class-variance-authority";

export const spinnerStyles = cva(
  [
    "duration-500 rounded-full animate-spin",
  ],
  {
    variants: {
      variant: {
        ring: "border-2 border-right",
        pageLoad: "border-[6px]",
      },

      size: {
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-[50px] h-[50px]",
      },

      color: {
        primary: "border-[#1570ef]",
        secondary: "border-action-primary",
      },
    },

    defaultVariants: {
      variant: "ring",
      size: "sm",
      color: "primary",
    },
  },
);
