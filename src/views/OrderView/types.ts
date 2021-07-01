import { ICheckOrderProps } from "types/order.types";

export interface IOrderViewProps {
  onSubmit: (formData: ICheckOrderProps) => void;
}
