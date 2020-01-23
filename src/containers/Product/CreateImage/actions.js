import { PRODUCT_CREATE_IMAGE_REQUEST, PRODUCT_CREATE_IMAGE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_CREATE_IMAGE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PRODUCT_CREATE_IMAGE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
