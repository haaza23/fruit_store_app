import { IProduct } from "types/products.types";

export interface IProductProps {
  product: IProduct;
  addToCart: (productId: number, quantity: number) => void;
  resetCart: boolean;
}