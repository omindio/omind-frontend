import { CLIENT_DELETE_REQUEST, CLIENT_DELETE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: CLIENT_DELETE_CLEAR,
  };
};

const deleteAction = id => {
  return {
    type: CLIENT_DELETE_REQUEST,
    id,
  };
};

export { deleteAction, clearAction };
