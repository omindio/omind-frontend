import {
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAILURE,
  PROJECT_CREATE_CLEAR,
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
    case PROJECT_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        project: Object.assign({}, state.project, action.values),
      });
    case PROJECT_CREATE_SUCCESS: {
      const { response } = action;

      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        project: response,
      });
    }
    case PROJECT_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PROJECT_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        project: {
          name: '',
          description: '',
          metaDescription: '',
          startedDate: '',
          finishedDate: '',
          published: false,
          status: '1',
          tags: [],
          client: '',
        },
      });
    default:
      return state;
  }
}
