import { USER_CREATE_REQUEST, USER_CREATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: USER_CREATE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: USER_CREATE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
