import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_CREATE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PRODUCT_CREATE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
