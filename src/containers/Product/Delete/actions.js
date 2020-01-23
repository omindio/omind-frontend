import { PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_DELETE_CLEAR,
  };
};

const deleteAction = id => {
  return {
    type: PRODUCT_DELETE_REQUEST,
    id,
  };
};

export { deleteAction, clearAction };
