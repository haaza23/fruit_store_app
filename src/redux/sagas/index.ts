import { all } from 'redux-saga/effects';
import { watchProducts } from './products.sagas';

import { watchUsers } from './user.sagas';

export default function* rootSaga() {
  yield all([
    watchUsers(),
    watchProducts(),
  ]);
}
