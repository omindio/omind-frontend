import { CLIENT_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: CLIENT_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;
