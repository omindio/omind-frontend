import {
  CLIENT_UPDATE_REQUEST,
  CLIENT_UPDATE_SUCCESS,
  CLIENT_UPDATE_FAILURE,
  CLIENT_UPDATE_CLEAR,
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
    user: {},
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLIENT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        client: action.values,
      });
    case CLIENT_UPDATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        client: Object.assign({}, state.client, response, response.user),
      });
    }
    case CLIENT_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case CLIENT_UPDATE_CLEAR:
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
