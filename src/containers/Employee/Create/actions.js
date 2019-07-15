import { EMPLOYEE_CREATE_REQUEST, EMPLOYEE_CREATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: EMPLOYEE_CREATE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: EMPLOYEE_CREATE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
