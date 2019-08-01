import {
  PROJECT_UPDATE_IMAGE_REQUEST,
  PROJECT_UPDATE_IMAGE_SUCCESS,
  PROJECT_UPDATE_IMAGE_FAILURE,
  PROJECT_UPDATE_IMAGE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: '',
  image: {
    id: '',
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
    case PROJECT_UPDATE_IMAGE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isFetching: true,
        image: Object.assign({}, state.image, action.values),
      });
    case PROJECT_UPDATE_IMAGE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: '',
        isFetching: false,
        success: true,
        image: response,
      });
    }
    case PROJECT_UPDATE_IMAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case PROJECT_UPDATE_IMAGE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: '',
        image: {
          id: '',
          projectId: '',
          title: '',
          path: '',
          imageFile: '',
          coverPage: false,
          published: false,
          main: false,
        },
      });
    default:
      return state;
  }
}
