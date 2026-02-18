import z from "zod";
import { addProductSchema } from "../schema/addProductSchema";

declare global {
  type addProductFormValues = z.infer<typeof addProductSchema>;
}

export {};
