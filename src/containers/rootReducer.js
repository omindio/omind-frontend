import { combineReducers } from 'redux';

import { reducer as authReducer } from './Auth';
import { reducer as userReducer } from './User';
import { reducer as uiReducer } from './UI';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ui: uiReducer,
});

const rootReducer = (stateParameter, action) => {
  let state = stateParameter;

  if (action.type === 'LOGOUT') {
    localStorage.removeItem('state');
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
