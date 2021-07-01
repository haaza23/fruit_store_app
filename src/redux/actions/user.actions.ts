import { AnyAction } from 'redux';

import * as constants from 'redux/constants/user.constants';
import { ICheckOrderProps } from 'types/order.types';

export function onPlaceOrder(formData: any): AnyAction {
  return {
    type: constants.USER_ON_SUBMIT_ORDER_REQUESTED,
    formData,
  };
}

export function onGetOrderStatus(formData: ICheckOrderProps): AnyAction {
  return {
    type: constants.USER_ON_GET_ORDER_STATUS_REQUESTED,
    formData,
  };
}
