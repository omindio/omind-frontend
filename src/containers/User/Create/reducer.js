import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE,
  USER_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  showSuccessAlert: false,
  user: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    verificationToken: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        showSuccessAlert: false,
        user: Object.assign({}, state.user, action.values),
      });
    case USER_CREATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        showSuccessAlert: true,

        success: true,
        user: Object.assign({}, state.user, response, response.user),
      });
    }
    case USER_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case USER_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        user: {
          name: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          verificationToken: '',
        },
      });
    default:
      return state;
  }
}
