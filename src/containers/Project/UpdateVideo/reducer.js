import {
  PROJECT_UPDATE_VIDEO_REQUEST,
  PROJECT_UPDATE_VIDEO_SUCCESS,
  PROJECT_UPDATE_VIDEO_FAILURE,
  PROJECT_UPDATE_VIDEO_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: '',
  video: {
    id: '',
    projectId: '',
    title: '',
    url: '',
    source: '',
    published: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_UPDATE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isFetching: true,
        video: Object.assign({}, state.video, action.values),
      });
    case PROJECT_UPDATE_VIDEO_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        isFetching: false,
        success: true,
        video: response,
      });
    }
    case PROJECT_UPDATE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PROJECT_UPDATE_VIDEO_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: '',
        video: {
          id: '',
          projectId: '',
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
