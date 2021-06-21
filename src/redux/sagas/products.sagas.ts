import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as constants from 'redux/constants/products.constants';
import { getProducts } from 'services/products.services';

export function* getAllProducts() {
  try {
    const data: unknown = yield call(getProducts);
    yield put({ type: constants.PRODUCTS_GET_ALL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PRODUCTS_GET_ALL_FAILED, error });
  }
}

export function* watchProducts() {
  yield all([
    takeLatest(constants.PRODUCTS_GET_ALL_REQUESTED, getAllProducts),
  ]);
}
