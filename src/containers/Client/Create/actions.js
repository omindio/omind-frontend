import { CLIENT_CREATE_REQUEST, CLIENT_CREATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: CLIENT_CREATE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: CLIENT_CREATE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
