import { LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST } from './types';

const initialState = {
  isFetching: false,
  error: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
      });
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
