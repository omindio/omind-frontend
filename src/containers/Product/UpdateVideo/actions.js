import { PRODUCT_UPDATE_VIDEO_REQUEST, PRODUCT_UPDATE_VIDEO_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_UPDATE_VIDEO_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PRODUCT_UPDATE_VIDEO_REQUEST,
    values,
  };
};

export { clearAction, createAction };
