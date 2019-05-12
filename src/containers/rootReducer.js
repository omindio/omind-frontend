import { combineReducers } from 'redux';

import { reducer as authReducer, Logout } from './Auth';
import { reducer as userReducer } from './User';
import { reducer as uiReducer } from './UI';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ui: uiReducer,
});

const rootReducer = (stateParameter, action) => {
  let state = stateParameter;
  const { LOGOUT_SUCCESS } = Logout.types;

  if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem('state');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
