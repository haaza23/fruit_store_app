import * as constants from 'redux/constants/products.constants';

export function onGetProducts(): { type: string } {
  return {
    type: constants.PRODUCTS_GET_ALL_REQUESTED,
  };
}
