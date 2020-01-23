import { PRODUCT_PUBLIC_GET_ONE_REQUEST, PRODUCT_PUBLIC_GET_ONE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_PUBLIC_GET_ONE_CLEAR,
  };
};

const getPublicOneAction = values => {
  return {
    type: PRODUCT_PUBLIC_GET_ONE_REQUEST,
    values,
  };
};

export { getPublicOneAction, clearAction };
