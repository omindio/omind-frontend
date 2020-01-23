import { PRODUCT_CREATE_VIDEO_REQUEST, PRODUCT_CREATE_VIDEO_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_CREATE_VIDEO_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PRODUCT_CREATE_VIDEO_REQUEST,
    values,
  };
};

export { clearAction, createAction };
