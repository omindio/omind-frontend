import {
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_DELETE_FAILURE,
  CLIENT_DELETE_CLEAR,
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
    case CLIENT_DELETE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        showSuccessAlert: false,
        id: action.id,
      });
    case CLIENT_DELETE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case CLIENT_DELETE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
        showSuccessAlert: false,
        succes: false,
      });
    case CLIENT_DELETE_CLEAR:
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
