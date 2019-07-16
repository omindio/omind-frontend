import { CLIENT_GET_ONE_REQUEST, CLIENT_GET_ONE_SUCCESS, CLIENT_GET_ONE_FAILURE } from './types';

const initialState = {
  isFetching: false,
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
    case CLIENT_GET_ONE_REQUEST:
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        client: Object.assign({}, state.client, action.values),
      });
    case CLIENT_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: false,
        client: Object.assign({}, state.client, response, response.user),
      });
    }
    case CLIENT_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.response,
      });
    default:
      return state;
  }
}
