import { USER_VERIFY_RESET_REQUEST, USER_VERIFY_RESET_CLEAR } from './types';

const clearAction = () => {
  return {
    type: USER_VERIFY_RESET_CLEAR,
  };
};

const resetAction = email => {
  return {
    type: USER_VERIFY_RESET_REQUEST,
    email,
  };
};

export { resetAction, clearAction };
