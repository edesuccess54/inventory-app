import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeClassess = (...classes: ClassValue[]) => twMerge(clsx(classes));
