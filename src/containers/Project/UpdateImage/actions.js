import { PROJECT_UPDATE_IMAGE_REQUEST, PROJECT_UPDATE_IMAGE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_UPDATE_IMAGE_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PROJECT_UPDATE_IMAGE_REQUEST,
    values,
  };
};

export { clearAction, createAction };
