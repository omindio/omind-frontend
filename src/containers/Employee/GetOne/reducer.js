import {
  EMPLOYEE_GET_ONE_REQUEST,
  EMPLOYEE_GET_ONE_SUCCESS,
  EMPLOYEE_GET_ONE_FAILURE,
} from './types';

const initialState = {
  isFetching: false,
  error: {},
  employee: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ONE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        employee: action.values,
      });
    case EMPLOYEE_GET_ONE_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        employee: action.response,
      });
    case EMPLOYEE_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
