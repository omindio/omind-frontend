import { CLIENT_UPDATE_REQUEST, CLIENT_UPDATE_CLEAR } from './types';

const clearAction = () => {
  return {
    type: CLIENT_UPDATE_CLEAR,
  };
};

const updateAction = values => {
  return {
    type: CLIENT_UPDATE_REQUEST,
    values,
  };
};

export { clearAction, updateAction };
