import { CONTACT_SUCCESS, CONTACT_FAILURE, CONTACT_REQUEST, CONTACT_CLEAR } from './types';

const initialState = {
  isFetching: false,
  success: false,
  clearSuccess: false,
  error: {},
  fields: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONTACT_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        clearSuccess: false,
        isAuthenticated: false,
        fields: Object.assign({}, state.fields, action.values),
      });
    case CONTACT_SUCCESS: {
      return Object.assign({}, state, {
        error: {},
        success: true,
        isFetching: false,
      });
    }
    case CONTACT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case CONTACT_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        clearSuccess: true,
        error: {},
        fields: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      });
    default:
      return state;
  }
}
