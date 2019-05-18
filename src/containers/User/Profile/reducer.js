import USER_PROFILE from './types';

const initialState = {
  error: {},
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE:
      return Object.assign({}, state, {
        error: {},
        user: action.values,
      });
    default:
      return state;
  }
}
