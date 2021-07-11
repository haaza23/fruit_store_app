import { ICreateOrderProps, IOrder } from "types/order.types";
import { IProduct } from "types/products.types";

export interface IHomeProps {
  addToCart: (productId: number, quantity: number) => void;
  order: IOrder;
  createCart: () => void;
  products: IProduct[];
  onSubmit: (props: ICreateOrderProps) => void;
}