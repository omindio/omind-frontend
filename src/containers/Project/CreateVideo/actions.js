import { PROJECT_CREATE_VIDEO_REQUEST, PROJECT_CREATE_VIDEO_CLEAR } from './types';

const clearAction = () => {
  return {
    type: PROJECT_CREATE_VIDEO_CLEAR,
  };
};

const createAction = values => {
  return {
    type: PROJECT_CREATE_VIDEO_REQUEST,
    values,
  };
};

export { clearAction, createAction };
