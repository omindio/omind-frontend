import {
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_UPDATE_CLEAR,
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
    status: '',
    images: [],
    tags: [],
    webUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
    youtubeUrl: '',
    soundcloudUrl: '',
    slug: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        product: Object.assign({}, state.product, action.values),
      });
    case PRODUCT_UPDATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        product: Object.assign({}, state.product, response, response.user),
      });
    }
    case PRODUCT_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PRODUCT_UPDATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        product: {},
      });
    default:
      return state;
  }
}
