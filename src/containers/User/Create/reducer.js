import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE,
  USER_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        user: action.values,
      });
    case USER_CREATE_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        user: action.response,
      });
    case USER_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case USER_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        user: {},
      });
    default:
      return state;
  }
}
