import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILURE,
  PRODUCT_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  product: {
    id: '',
    createdDate: '',
    name: '',
    description: '',
    metaDescription: '',
    startedDate: '',
    finishedDate: '',
    published: false,
    status: '1',
    images: [],
    tags: [],
    webUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
    slug: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        product: Object.assign({}, state.product, action.values),
      });
    case PRODUCT_CREATE_SUCCESS: {
      const { response } = action;

      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        product: response,
      });
    }
    case PRODUCT_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PRODUCT_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        product: {
          name: '',
          description: '',
          metaDescription: '',
          startedDate: '',
          finishedDate: '',
          published: false,
          status: '1',
          tags: [],
          webUrl: '',
          facebookUrl: '',
          instagramUrl: '',
          linkedinUrl: '',
        },
      });
    default:
      return state;
  }
}
