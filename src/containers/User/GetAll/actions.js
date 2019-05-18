import { USER_GET_ALL_REQUEST } from './types';

const getAllAction = values => {
  return {
    type: USER_GET_ALL_REQUEST,
    values,
  };
};

export default getAllAction;
