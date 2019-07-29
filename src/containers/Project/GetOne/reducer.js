import { PROJECT_GET_ONE_REQUEST, PROJECT_GET_ONE_SUCCESS, PROJECT_GET_ONE_FAILURE } from './types';

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
    case PROJECT_GET_ONE_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        project: Object.assign({}, state.project, action.values),
      });
    }
    case PROJECT_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        project: Object.assign({}, state.project, response),
      });
    }
    case PROJECT_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    default:
      return state;
  }
}
