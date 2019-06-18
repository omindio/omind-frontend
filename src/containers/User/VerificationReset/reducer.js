import {
  USER_VERIFY_RESET_REQUEST,
  USER_VERIFY_RESET_SUCCESS,
  USER_VERIFY_RESET_FAILURE,
  USER_VERIFY_RESET_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  token: null,
  email: null,
  success: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_VERIFY_RESET_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        email: action.email,
      });
    case USER_VERIFY_RESET_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        token: action.response,
      });
    case USER_VERIFY_RESET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    case USER_VERIFY_RESET_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        token: null,
        email: null,
        success: false,
      });
    default:
      return state;
  }
}
