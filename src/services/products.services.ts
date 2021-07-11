import { get } from 'services/api';

export async function getProducts(): Promise<any> {
  const response = await get('producto');
  return response;
}
