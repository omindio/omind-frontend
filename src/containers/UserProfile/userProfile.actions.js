import { UPDATE_PROFILE_REQUEST, LOAD_DATA_REQUEST } from './userProfile.types';

const loadDataAction = values => {
  return {
    type: LOAD_DATA_REQUEST,
    values,
  };
};

const updateUserProfileAction = values => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    values,
  };
};

export { loadDataAction, updateUserProfileAction };
