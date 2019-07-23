import { PROJECT_UPDATE_REQUEST, PROJECT_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: PROJECT_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
