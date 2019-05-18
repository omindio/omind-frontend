import USER_PROFILE from './types';

const profileAction = values => {
  return {
    type: USER_PROFILE,
    values,
  };
};

export default profileAction;
