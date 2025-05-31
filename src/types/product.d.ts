import { Status } from "@/utils/statusLabel";

declare global {
  interface ProductProps {
    id: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
    expiringDate: string;
    availability: Status;
  }
}

export {};
