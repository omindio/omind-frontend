import { EMPLOYEE_DELETE_REQUEST, EMPLOYEE_DELETE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: EMPLOYEE_DELETE_CLEAR,
  };
};

const deleteAction = id => {
  return {
    type: EMPLOYEE_DELETE_REQUEST,
    id,
  };
};

export { deleteAction, clearAction };
