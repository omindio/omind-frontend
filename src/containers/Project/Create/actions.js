import { PROJECT_CREATE_REQUEST, PROJECT_CREATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_CREATE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PROJECT_CREATE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
