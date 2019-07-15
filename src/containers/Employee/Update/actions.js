import { EMPLOYEE_UPDATE_REQUEST, EMPLOYEE_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: EMPLOYEE_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: EMPLOYEE_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
