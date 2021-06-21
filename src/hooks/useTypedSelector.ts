import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IProductDefaultState } from 'types/products.types';

interface IRootState {
  form: any;
  products: IProductDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
