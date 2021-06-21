import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';
import productsReducer from './products.reducer.';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

export default rootReducer;
