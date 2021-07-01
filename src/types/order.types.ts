export interface IOrder {
  precio: null | number;
  us_telegram: string | null;
  direccion: string;
  estado: string;
  productos: IProductForm[];
}

export interface IProductForm {
  id: number;
  cantidad: number;
}

export interface ICheckOrderProps {
  orderId: number;
}