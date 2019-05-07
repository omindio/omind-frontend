import { LOGOUT_REQUEST } from './types';

const logoutAction = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
  };
};

export default logoutAction;
