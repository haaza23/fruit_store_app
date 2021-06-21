import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as constants from 'redux/constants/user.constants';
import { getStatus } from 'services/user.services';

export function* getOrderStatus(action: any) {
  try {
    const data: unknown = yield call(getStatus, action.orderId);
    yield put({ type: constants.USER_ON_GET_ORDER_STATUS_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_GET_ORDER_STATUS_FAILED, error });
  }
}

export function* watchUsers() {
  yield all([
    takeLatest(constants.USER_ON_GET_ORDER_STATUS_REQUESTED, getOrderStatus),
  ]);
}
