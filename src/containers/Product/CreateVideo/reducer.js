import {
  PRODUCT_CREATE_VIDEO_REQUEST,
  PRODUCT_CREATE_VIDEO_SUCCESS,
  PRODUCT_CREATE_VIDEO_FAILURE,
  PRODUCT_CREATE_VIDEO_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  successClear: false,
  error: '',
  video: {
    productId: '',
    title: '',
    url: '',
    source: '',
    published: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_CREATE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isFetching: true,
        successClear: false,
        video: Object.assign({}, state.video, action.values),
      });
    case PRODUCT_CREATE_VIDEO_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        isFetching: false,
        success: true,
        video: response,
      });
    }
    case PRODUCT_CREATE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        successClear: false,
        error: action.response,
      });
    case PRODUCT_CREATE_VIDEO_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: '',
        successClear: true,
        video: {
          productId: '',
          title: '',
          url: '',
          source: '',
          published: false,
        },
      });
    default:
      return state;
  }
}
