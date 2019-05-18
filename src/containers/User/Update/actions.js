import { USER_UPDATE_REQUEST, USER_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: USER_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: USER_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
