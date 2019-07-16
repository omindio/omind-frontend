import {
  EMPLOYEE_GET_ONE_REQUEST,
  EMPLOYEE_GET_ONE_SUCCESS,
  EMPLOYEE_GET_ONE_FAILURE,
} from './types';

const initialState = {
  isFetching: false,
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
    user: {},
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ONE_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        employee: Object.assign({}, state.employee, action.values),
      });
    }
    case EMPLOYEE_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        employee: Object.assign({}, state.employee, response, response.user),
      });
    }
    case EMPLOYEE_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
