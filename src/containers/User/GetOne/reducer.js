import { USER_GET_ONE_REQUEST, USER_GET_ONE_SUCCESS, USER_GET_ONE_FAILURE } from './types';

const initialState = {
  isFetching: false,
  error: {},
  user: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_GET_ONE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        user: Object.assign({}, state.user, action.values),
      });
    case USER_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        user: Object.assign({}, state.user, response, response.user),
      });
    }
    case USER_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
