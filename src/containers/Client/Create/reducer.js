import {
  CLIENT_CREATE_REQUEST,
  CLIENT_CREATE_SUCCESS,
  CLIENT_CREATE_FAILURE,
  CLIENT_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  client: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        client: action.values,
      });
    case CLIENT_CREATE_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        client: action.response,
      });
    case CLIENT_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case CLIENT_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        client: {},
      });
    default:
      return state;
  }
}
