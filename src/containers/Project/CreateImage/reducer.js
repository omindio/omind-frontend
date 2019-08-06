import {
  PROJECT_CREATE_IMAGE_REQUEST,
  PROJECT_CREATE_IMAGE_SUCCESS,
  PROJECT_CREATE_IMAGE_FAILURE,
  PROJECT_CREATE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  showSuccessAlert: false,
  error: '',
  image: {
    projectId: '',
    title: '',
    path: '',
    imageFile: '',
    coverPage: false,
    published: false,
    main: false,
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROJECT_CREATE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isFetching: true,
        showSuccessAlert: false,
        image: Object.assign({}, state.image, action.values),
      });
    case PROJECT_CREATE_IMAGE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        showSuccessAlert: true,
        isFetching: false,
        success: true,
        image: response,
      });
    }
    case PROJECT_CREATE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case PROJECT_CREATE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: '',
        image: {
          projectId: null,
          title: '',
          path: '',
          imageFile: null,
          coverPage: false,
          published: false,
          main: false,
        },
      });
    default:
      return state;
  }
}
