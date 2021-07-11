import { get, post } from 'services/api';
import { ICheckOrderProps } from 'types/order.types';

export async function submitOrder(data: any): Promise<any> {
  const response = await post('pedido', data);
  return response;
}

export async function getStatus(formData: ICheckOrderProps): Promise<any> {
  const response = await get(`pedido/${formData.orderId}`);
  return response;
}
