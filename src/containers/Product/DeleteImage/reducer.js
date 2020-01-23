import {
  PRODUCT_DELETE_IMAGE_REQUEST,
  PRODUCT_DELETE_IMAGE_SUCCESS,
  PRODUCT_DELETE_IMAGE_FAILURE,
  PRODUCT_DELETE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  productId: null,
  imageId: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DELETE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        productId: action.productId,
        imageId: action.imageId,
      });
    case PRODUCT_DELETE_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case PRODUCT_DELETE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PRODUCT_DELETE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        productId: null,
        imageId: null,
      });
    default:
      return state;
  }
}
