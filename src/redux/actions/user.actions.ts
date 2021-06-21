import * as constants from 'redux/constants/user.constants';

export function onPlaceOrder(formData: any): { type: string; formData: any } {
  return {
    type: constants.USER_ON_SUBMIT_ORDER_REQUESTED,
    formData,
  };
}

export function onGetOrderStatus(orderId: string): { type: string, orderId: string } {
  return {
    type: constants.USER_ON_GET_ORDER_STATUS_REQUESTED,
    orderId,
  };
}
