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
  tokenExpires: null,
  clientId: null,
  employeeId: null,
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
    case LOGIN_SUCCESS: {
      const data = Object.assign({}, state, action.response);
      return Object.assign({}, data, {
        error: {},
        isFetching: false,
        isAuthenticated: true,
      });
    }
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
