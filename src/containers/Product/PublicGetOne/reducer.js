import {
  PRODUCT_PUBLIC_GET_ONE_REQUEST,
  PRODUCT_PUBLIC_GET_ONE_SUCCESS,
  PRODUCT_PUBLIC_GET_ONE_FAILURE,
  PRODUCT_PUBLIC_GET_ONE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: null,
  product: {
    id: '',
    name: '',
    description: '',
    metaDescription: '',
    images: [],
    tags: [],
    slug: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_PUBLIC_GET_ONE_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        product: Object.assign({}, state.product, action.values),
      });
    }
    case PRODUCT_PUBLIC_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        product: Object.assign({}, state.product, response),
      });
    }
    case PRODUCT_PUBLIC_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PRODUCT_PUBLIC_GET_ONE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: null,
        product: {
          id: '',
          name: '',
          description: '',
          metaDescription: '',
          images: [],
          tags: [],
          slug: '',
        },
      });
    default:
      return state;
  }
}
