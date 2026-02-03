import { z } from "zod";

export const addProductSchema = z.object({
  productName: z.string().min(3, { message: "Product name is required" }),
  productCategory: z.string().min(3, { message: "Product category is required" }),
  purchasePrice: z.number().min(1, { message: "Purchase price must be a positive number" }),
  quantity: z.number().min(0.01, { message: "quantity is required" }),
  expiringDate: z
    .string()
    .optional()
    .refine((val) => !isNaN(Date.parse(val as string)), {
      message: "Invalid date",
    }),
  totalAmount: z.number().min(1, { message: "total amount must be a positive number" }),
  productImage: z.instanceof(File).nullable().optional(),
});
