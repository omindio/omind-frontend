import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from './types';
/*
  TODO: Refactor userProp inside user { ... } (object)
*/
const initialState = {
  isFetching: false,
  error: {},
  isAuthenticated: false,
  userId: null,
  userRole: null,
  userName: null,
  userLastName: null,
  userEmail: null,
  token: null,
  tokenExpires: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // ---LOGIN---
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        isAuthenticated: true,
        userId: action.response.userId,
        userRole: action.response.userRole,
        userName: action.response.userName,
        userLastName: action.response.userLastName,
        userEmail: action.response.userEmail,
        token: action.response.token,
        tokenExpires: action.response.tokenExpires,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: action.response,
      });
    default:
      return state;
  }
}
