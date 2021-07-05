import { ICheckOrderProps, IOrder } from "types/order.types";

export interface IOrderViewProps {
  order: IOrder;
  onSubmit: (formData: ICheckOrderProps) => void;
}
