import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as constants from 'redux/constants/user.constants';
import { getStatus, submitOrder } from 'services/user.services';

export function* getOrderStatus(action: any) {
  try {
    const data: unknown = yield call(getStatus, action.formData);
    yield put({ type: constants.USER_ON_GET_ORDER_STATUS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_GET_ORDER_STATUS_FAILED, error });
  }
}

export function* placeOrder(action: any) {
  try {
    const data: unknown = yield call(submitOrder, action.formData);
    yield put({ type: constants.USER_ON_SUBMIT_ORDER_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_SUBMIT_ORDER_FAILED, error });
  }
}

export function* watchUsers() {
  yield all([
    takeLatest(constants.USER_ON_GET_ORDER_STATUS_REQUESTED, getOrderStatus),
    takeLatest(constants.USER_ON_SUBMIT_ORDER_REQUESTED, placeOrder),
  ]);
}
