import { LOGIN_REQUEST } from './types';

const loginAction = values => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    values,
  };
};

export default loginAction;
