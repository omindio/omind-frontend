import { BANK_ACCOUNT_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: BANK_ACCOUNT_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;
