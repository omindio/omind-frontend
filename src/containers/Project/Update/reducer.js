import {
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAILURE,
  PROJECT_UPDATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  project: {
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
    slug: '',
    client: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        project: Object.assign({}, state.project, action.values),
      });
    case PROJECT_UPDATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        project: Object.assign({}, state.project, response, response.user),
      });
    }
    case PROJECT_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PROJECT_UPDATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        project: {},
      });
    default:
      return state;
  }
}
