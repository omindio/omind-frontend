import { PROJECT_PUBLIC_GET_ONE_REQUEST } from './types';

const getOneAction = values => {
  return {
    type: PROJECT_PUBLIC_GET_ONE_REQUEST,
    values,
  };
};

export default getOneAction;
