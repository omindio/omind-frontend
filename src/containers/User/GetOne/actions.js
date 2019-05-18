import { USER_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: USER_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;
