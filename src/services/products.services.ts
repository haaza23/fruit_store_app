import { get } from 'services/api';

export async function getProducts(): Promise<any> {
  // const response = await get('products');
  const response = { products: [
    {
      id: 1,
      title: 'POLLO'
    },
    {
      id: 2,
      title: 'PAPA'
    },
    {
      id: 3,
      title: 'CARNE'
    },
    {
      id: 4,
      title: 'PESCADO'
    },
  ]};
  return response;
}
