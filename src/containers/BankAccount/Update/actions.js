import { BANK_ACCOUNT_UPDATE_REQUEST, BANK_ACCOUNT_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: BANK_ACCOUNT_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: BANK_ACCOUNT_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
