import {
  PROJECT_DELETE_VIDEO_REQUEST,
  PROJECT_DELETE_VIDEO_SUCCESS,
  PROJECT_DELETE_VIDEO_FAILURE,
  PROJECT_DELETE_VIDEO_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  projectId: null,
  videoId: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_DELETE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        projectId: action.projectId,
        videoId: action.videoId,
      });
    case PROJECT_DELETE_VIDEO_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case PROJECT_DELETE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PROJECT_DELETE_VIDEO_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        projectId: null,
        videoId: null,
      });
    default:
      return state;
  }
}
