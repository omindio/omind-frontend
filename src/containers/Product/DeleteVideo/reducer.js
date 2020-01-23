import {
  PRODUCT_DELETE_VIDEO_REQUEST,
  PRODUCT_DELETE_VIDEO_SUCCESS,
  PRODUCT_DELETE_VIDEO_FAILURE,
  PRODUCT_DELETE_VIDEO_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  productId: null,
  videoId: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DELETE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        productId: action.productId,
        videoId: action.videoId,
      });
    case PRODUCT_DELETE_VIDEO_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case PRODUCT_DELETE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PRODUCT_DELETE_VIDEO_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        productId: null,
        videoId: null,
      });
    default:
      return state;
  }
}
