import AUTH_PROFILE from './types';

const profileAction = values => {
  return {
    type: AUTH_PROFILE,
    values,
  };
};

export default profileAction;
