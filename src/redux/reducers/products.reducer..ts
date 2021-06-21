import { FunctionComponent } from 'react';

import * as constants from 'redux/constants/products.constants';

const defaultState: any = {
  items: null,
  loading: false,
};

const productsReducer: FunctionComponent<any> = (state = defaultState, action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.PRODUCTS_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.PRODUCTS_GET_ALL_SUCCEEDED:
      return {
        ...state,
        items: data.products,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
