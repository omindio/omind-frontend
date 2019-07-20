import {
  BANK_ACCOUNT_GET_ONE_REQUEST,
  BANK_ACCOUNT_GET_ONE_SUCCESS,
  BANK_ACCOUNT_GET_ONE_FAILURE,
} from './types';

const initialState = {
  isFetching: false,
  success: false,
  error: {},
  bankAccount: {
    id: '',
    vat: '',
    swift: '',
    iban: '',
    bankName: '',
    routeNumber: '',
    user: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case BANK_ACCOUNT_GET_ONE_REQUEST: {
      return Object.assign({}, state, {
        error: null,
        isFetching: true,
        success: false,
        bankAccount: Object.assign({}, state.bankAccount, action.values),
      });
    }
    case BANK_ACCOUNT_GET_ONE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: null,
        isFetching: false,
        success: true,
        bankAccount: Object.assign({}, state.bankAccount, response),
      });
    }
    case BANK_ACCOUNT_GET_ONE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    default:
      return state;
  }
}
