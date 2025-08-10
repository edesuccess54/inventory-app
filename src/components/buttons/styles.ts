import { cva } from "class-variance-authority";

export const buttonStyles = cva(["cursor-pointer px-2 py-2 my-3 rounded-md"], {
  variants: {
    variant: {
      solid: ["bg-background-primary outline-0 border-0", "text-white text-center w-full"],
      outline: "border border-border-primary w-full",
      ghost: "",
      danger: "bg-red-600 text-white text-center w-full",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
