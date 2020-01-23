import { PRODUCT_UPDATE_IMAGE_REQUEST, PRODUCT_UPDATE_IMAGE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_UPDATE_IMAGE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PRODUCT_UPDATE_IMAGE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
