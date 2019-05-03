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
  error: undefined,
  isAuthenticated: false,
  userId: undefined,
  userRole: undefined,
  token: undefined,
  tokenExpires: undefined,
  values: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // ---LOGIN---
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        error: undefined,
        isFetching: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        error: undefined,
        isFetching: false,
        isAuthenticated: true,
        userId: action.response.userId,
        userRole: action.response.userRole,
        token: action.response.token,
        tokenExpires: action.response.tokenExpires,
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
        error: undefined,
        userId: undefined,
        userRole: undefined,
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
