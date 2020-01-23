import { PRODUCT_DELETE_VIDEO_REQUEST, PRODUCT_DELETE_VIDEO_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_DELETE_VIDEO_CLEAR,
  };
};

const deleteAction = ({ productId, videoId }) => {
  return {
    type: PRODUCT_DELETE_VIDEO_REQUEST,
    productId,
    videoId,
  };
};

export { deleteAction, clearAction };
