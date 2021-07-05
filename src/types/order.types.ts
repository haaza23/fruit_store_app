export interface IOrder {
  id?: number;
  precio?: null | number;
  us_telegram: string | null;
  direccion: string;
  estado: string;
  productos: IProductForm[];
}

export interface IProductForm {
  id_producto: number;
  cantidad: number;
}

export interface ICheckOrderProps {
  orderId: number;
}

export interface IUserDefaultState {
  data: IOrder;
  loading: boolean;
}
