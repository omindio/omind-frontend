import {
  CLIENT_CREATE_REQUEST,
  CLIENT_CREATE_SUCCESS,
  CLIENT_CREATE_FAILURE,
  CLIENT_CREATE_CLEAR,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  client: {
    id: '',
    companyName: '',
    logo: '',
    logoFile: null,
    published: false,
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    description: '',
    cif: '',
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
    case CLIENT_CREATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        client: Object.assign({}, state.client, action.values),
      });
    case CLIENT_CREATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        client: Object.assign({}, state.client, response.user, response),
      });
    }
    case CLIENT_CREATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case CLIENT_CREATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        client: {},
      });
    default:
      return state;
  }
}
