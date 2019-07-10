import { CLIENT_GET_ALL_REQUEST, CLIENT_GET_ALL_SUCCESS, CLIENT_GET_ALL_FAILURE } from './types';

const initialState = {
  isFetching: false,
  error: {},
  page: 1,
  limit: 10,
  pages: 1,
  current: 1,
  clients: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_GET_ALL_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        page: action.values.page,
        limit: action.values.limit,
      });
    case CLIENT_GET_ALL_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        current: action.response.current,
        pages: action.response.pages,
        clients: action.response.clients,
      });
    case CLIENT_GET_ALL_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
