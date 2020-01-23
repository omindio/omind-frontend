import {
  PRODUCT_UPDATE_IMAGE_REQUEST,
  PRODUCT_UPDATE_IMAGE_SUCCESS,
  PRODUCT_UPDATE_IMAGE_FAILURE,
  PRODUCT_UPDATE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  successClear: false,
  error: '',
  image: {
    id: '',
    productId: '',
    title: '',
    path: '',
    imageFile: '',
    coverPage: false,
    published: false,
    main: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_UPDATE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        successClear: false,
        isFetching: true,
        image: Object.assign({}, state.image, action.values),
      });
    case PRODUCT_UPDATE_IMAGE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        isFetching: false,
        success: true,
        image: response,
      });
    }
    case PRODUCT_UPDATE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PRODUCT_UPDATE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        successClear: true,
        error: '',
        image: {
          id: '',
          productId: '',
          title: '',
          path: '',
          imageFile: '',
          coverPage: false,
          published: false,
          main: false,
        },
      });
    default:
      return state;
  }
}
