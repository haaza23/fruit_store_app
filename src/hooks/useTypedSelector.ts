import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserDefaultState } from 'types/order.types';
import { IProductDefaultState } from 'types/products.types';

interface IRootState {
  form: any;
  products: IProductDefaultState;
  user: IUserDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
