import { NAV_OPEN, NAV_CLOSE } from './types';

const initialState = {
  isOpen: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NAV_OPEN:
      return Object.assign({}, state, {
        isOpen: true,
      });
    case NAV_CLOSE:
      return Object.assign({}, state, {
        isOpen: false,
      });
    default:
      return state;
  }
}
