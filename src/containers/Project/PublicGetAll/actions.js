import { PROJECT_PUBLIC_GET_ALL_REQUEST } from './types';

const getPublicAllAction = values => {
  return {
    type: PROJECT_PUBLIC_GET_ALL_REQUEST,
    values,
  };
};

export default getPublicAllAction;
