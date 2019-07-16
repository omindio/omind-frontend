import {
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAILURE,
  EMPLOYEE_UPDATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  employee: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    workPosition: '',
    dni: '',
    fiscalAddress: '',
    phone: '',
    socialLinkedin: '',
    socialFacebook: '',
    socialInstagram: '',
    web: '',
    user: {},
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        employee: Object.assign({}, state.employee, action.values),
      });
    case EMPLOYEE_UPDATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        employee: Object.assign({}, state.employee, response, response.user),
      });
    }
    case EMPLOYEE_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case EMPLOYEE_UPDATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        employee: {},
      });
    default:
      return state;
  }
}
