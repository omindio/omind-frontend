import {
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_VERIFY_FAILURE,
  USER_VERIFY_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  token: null,
  success: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_VERIFY_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        token: action.token,
      });
    case USER_VERIFY_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
      });
    case USER_VERIFY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case USER_VERIFY_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        token: null,
        success: false,
      });
    default:
      return state;
  }
}
