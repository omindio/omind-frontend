import { LOGIN_REQUEST, LOGOUT_REQUEST } from './auth.types';

export const loginAction = values => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    values,
  };
};

export const logoutAction = (message = '') => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
    message,
  };
};
