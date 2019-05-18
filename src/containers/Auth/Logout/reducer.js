import LOGOUT from './types';

const initialState = {
  error: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return Object.assign({}, state, {
        error: {},
      });
    default:
      return state;
  }
}
