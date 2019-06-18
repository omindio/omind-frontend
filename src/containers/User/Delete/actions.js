import { USER_DELETE_REQUEST, USER_DELETE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: USER_DELETE_CLEAR,
  };
};

const deleteAction = id => {
  return {
    type: USER_DELETE_REQUEST,
    id,
  };
};

export { deleteAction, clearAction };
