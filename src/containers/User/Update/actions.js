import { USER_UPDATE_REQUEST, LOAD_DATA_REQUEST } from './types';

const loadDataAction = values => {
  return {
    type: LOAD_DATA_REQUEST,
    values,
  };
};

const updateAction = values => {
  return {
    type: USER_UPDATE_REQUEST,
    values,
  };
};

export { loadDataAction, updateAction };
