import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './auth.types';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: undefined,
  token: undefined,
  tokenExpires: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // ---LOGIN---
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.response.user,
        token: action.response.token,
        tokenExpires: action.response.tokenExpires,
        error: null,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: action.response,
      });
    // ---LOGOUT--
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true,
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: null,
        user: undefined,
        token: undefined,
        tokenExpires: undefined,
      });
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        error: action.response,
      });
    default:
      return state;
  }
}
