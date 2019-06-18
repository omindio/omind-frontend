import { USER_VERIFY_REQUEST, USER_VERIFY_CLEAR } from './types';

const clearAction = () => {
  return {
    type: USER_VERIFY_CLEAR,
  };
};

const verifyAction = token => {
  return {
    type: USER_VERIFY_REQUEST,
    token,
  };
};

export { verifyAction, clearAction };
