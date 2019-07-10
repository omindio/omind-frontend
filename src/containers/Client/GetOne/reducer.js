import { CLIENT_GET_ONE_REQUEST, CLIENT_GET_ONE_SUCCESS, CLIENT_GET_ONE_FAILURE } from './types';

const initialState = {
  isFetching: false,
  error: {},
  client: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_GET_ONE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        client: action.values,
      });
    case CLIENT_GET_ONE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        client: action.response,
      });
    case CLIENT_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
