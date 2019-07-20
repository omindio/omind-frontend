import {
  BANK_ACCOUNT_UPDATE_REQUEST,
  BANK_ACCOUNT_UPDATE_SUCCESS,
  BANK_ACCOUNT_UPDATE_FAILURE,
  BANK_ACCOUNT_UPDATE_CLEAR,
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
    case BANK_ACCOUNT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        error: {},
        isFetching: true,
        success: false,
        bankAccount: Object.assign({}, state.bankAccount, action.values),
      });
    case BANK_ACCOUNT_UPDATE_SUCCESS: {
      const { response } = action;
      return Object.assign({}, state, {
        error: {},
        isFetching: false,
        success: true,
        bankAccount: Object.assign({}, state.bankAccount, response),
      });
    }
    case BANK_ACCOUNT_UPDATE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: action.response,
      });
    case BANK_ACCOUNT_UPDATE_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
        error: {},
        bankAccount: {},
      });
    default:
      return state;
  }
}
