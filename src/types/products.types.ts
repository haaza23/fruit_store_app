export interface IProduct {
  id: number;
  nombre: string;
  precio: string;
  descripcion: string;
}

export interface IProductDefaultState {
  items: IProduct[];
  loading: boolean;
}
