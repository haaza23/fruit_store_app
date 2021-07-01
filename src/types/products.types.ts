export interface IProduct {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

export interface IProductDefaultState {
  items: IProduct[];
  loading: boolean;
}
