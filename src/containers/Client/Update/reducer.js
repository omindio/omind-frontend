import {
  CLIENT_UPDATE_REQUEST,
  CLIENT_UPDATE_SUCCESS,
  CLIENT_UPDATE_FAILURE,
  CLIENT_UPDATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  client: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        client: action.values,
      });
    case CLIENT_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        client: action.response,
      });
    case CLIENT_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case CLIENT_UPDATE_CLEAR:
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
