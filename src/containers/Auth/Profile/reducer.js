import AUTH_PROFILE from './types';

const initialState = {
  error: {},
  user: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_PROFILE:
      return Object.assign({}, state, {
        error: {},
        user: action.values,
      });
    default:
      return state;
  }
}
