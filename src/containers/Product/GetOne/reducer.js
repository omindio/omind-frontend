import { PRODUCT_GET_ONE_REQUEST, PRODUCT_GET_ONE_SUCCESS, PRODUCT_GET_ONE_FAILURE } from './types';

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
    videos: [],
    tags: [],
    slug: '',
    webUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
    youtubeUrl: '',
    soundcloudUrl: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_GET_ONE_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        product: Object.assign({}, state.product, action.values),
      });
    }
    case PRODUCT_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        product: Object.assign({}, state.product, response),
      });
    }
    case PRODUCT_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    default:
      return state;
  }
}
