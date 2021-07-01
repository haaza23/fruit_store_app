import { FunctionComponent } from 'react';

import * as constants from 'redux/constants/user.constants';

const defaultState: any = {
  data: null,
  loading: false,
};

const userReducer: FunctionComponent<any> = (state = defaultState, action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_GET_ORDER_STATUS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.USER_ON_GET_ORDER_STATUS_SUCCEEDED:
      return {
        ...state,
        data,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
