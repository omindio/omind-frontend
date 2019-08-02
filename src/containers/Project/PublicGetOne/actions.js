import { PROJECT_PUBLIC_GET_ONE_REQUEST, PROJECT_PUBLIC_GET_ONE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_PUBLIC_GET_ONE_CLEAR,
  };
};

const getPublicOneAction = values => {
  return {
    type: PROJECT_PUBLIC_GET_ONE_REQUEST,
    values,
  };
};

export { getPublicOneAction, clearAction };
