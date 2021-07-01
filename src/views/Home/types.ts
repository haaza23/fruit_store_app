import { IProduct } from "types/products.types";

export interface IHomeProps {
  products: IProduct[];
  addToCart: (productId: number, quantity: number) => void;
  placeOrder: () => void;
}