import {
  PRODUCT_CREATE_IMAGE_REQUEST,
  PRODUCT_CREATE_IMAGE_SUCCESS,
  PRODUCT_CREATE_IMAGE_FAILURE,
  PRODUCT_CREATE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  showSuccessAlert: false,
  error: '',
  image: {
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
    case PRODUCT_CREATE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isFetching: true,
        showSuccessAlert: false,
        image: Object.assign({}, state.image, action.values),
      });
    case PRODUCT_CREATE_IMAGE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        showSuccessAlert: true,
        isFetching: false,
        success: true,
        image: response,
      });
    }
    case PRODUCT_CREATE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PRODUCT_CREATE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: '',
        image: {
          productId: null,
          title: '',
          path: '',
          imageFile: null,
          coverPage: false,
          published: false,
          main: false,
        },
      });
    default:
      return state;
  }
}
