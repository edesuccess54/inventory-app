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

  interface PurchasedProductProps {
    id: number;
    purchasedId: string;
    productName: string;
    supplierName: string;
    quantity: number;
    price: number;
    date: string;
  }
}

export {};
