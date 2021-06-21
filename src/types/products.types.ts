export interface IProduct {
  id: string;
  title: string;
}

export interface IProductDefaultState {
  items: IProduct[];
  loading: boolean;
}
