import { get, post } from 'services/api';

export async function submitOrder(formData: any): Promise<any> {
  const response = await post('products/order', formData);
  return response;
}

export async function getStatus(orderId: string): Promise<any> {
  const response = await get(`products/order/${orderId}`);
  return response;
}
