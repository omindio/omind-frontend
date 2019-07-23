import { PROJECT_DELETE_REQUEST, PROJECT_DELETE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_DELETE_CLEAR,
  };
};

const deleteAction = id => {
  return {
    type: PROJECT_DELETE_REQUEST,
    id,
  };
};

export { deleteAction, clearAction };
