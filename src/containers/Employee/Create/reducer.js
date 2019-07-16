import {
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_CREATE_FAILURE,
  EMPLOYEE_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  employee: {
    id: '',
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
    verificationToken: '',
    user: {},
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        employee: Object.assign({}, state.employee, action.values),
      });
    case EMPLOYEE_CREATE_SUCCESS: {
      const { response } = action;

      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        employee: Object.assign({}, state.employee, response.user, response),
      });
    }
    case EMPLOYEE_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case EMPLOYEE_CREATE_CLEAR:
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
