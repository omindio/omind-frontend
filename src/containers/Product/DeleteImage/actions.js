import { PRODUCT_DELETE_IMAGE_REQUEST, PRODUCT_DELETE_IMAGE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PRODUCT_DELETE_IMAGE_CLEAR,
  };
};

const deleteAction = ({ productId, imageId }) => {
  return {
    type: PRODUCT_DELETE_IMAGE_REQUEST,
    productId,
    imageId,
  };
};

export { deleteAction, clearAction };
