import {
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAILURE,
  EMPLOYEE_DELETE_CLEAR,
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
    case EMPLOYEE_DELETE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        showSuccessAlert: false,
        success: false,
        id: action.id,
      });
    case EMPLOYEE_DELETE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        showSuccessAlert: true,
        success: true,
      });
    case EMPLOYEE_DELETE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        showSuccessAlert: false,
        error: action.response,
      });
    case EMPLOYEE_DELETE_CLEAR:
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
