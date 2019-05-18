import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        user: action.values,
      });
    case USER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        user: action.response,
      });
    case USER_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case USER_UPDATE_CLEAR:
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
