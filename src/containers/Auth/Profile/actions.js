import AUTH_PROFILE_UPDATE from './types';

const profileAction = values => {
  return {
    type: AUTH_PROFILE_UPDATE,
    values,
  };
};

export default profileAction;
