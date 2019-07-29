import {
  PROJECT_DELETE_IMAGE_REQUEST,
  PROJECT_DELETE_IMAGE_SUCCESS,
  PROJECT_DELETE_IMAGE_FAILURE,
  PROJECT_DELETE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  projectId: null,
  imageId: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_DELETE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        projectId: action.projectId,
        imageId: action.imageId,
      });
    case PROJECT_DELETE_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case PROJECT_DELETE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PROJECT_DELETE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        projectId: null,
        imageId: null,
      });
    default:
      return state;
  }
}
