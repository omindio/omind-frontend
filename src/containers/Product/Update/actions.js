import { PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: PRODUCT_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
