import {
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_DELETE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
  showSuccessAlert: false,
  id: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        showSuccessAlert: false,
        id: action.id,
      });
    case USER_DELETE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case USER_DELETE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case USER_DELETE_CLEAR:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        id: null,
      });
    default:
      return state;
  }
}
