import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from './Auth';
import { reducer as userReducer } from './User';
import { reducer as clientReducer } from './Client';
import { reducer as employeeReducer } from './Employee';
import { reducer as uiReducer } from './UI';
import { reducer as ContactReducer } from './Contact';

const appReducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage, whitelist: ['login', 'profile'] }, authReducer),
  client: clientReducer,
  employee: employeeReducer,
  user: userReducer,
  contact: ContactReducer,
  ui: uiReducer,
});

const rootReducer = (stateParameter, action) => {
  let state = stateParameter;
  if (action.type === 'LOGOUT') {
    localStorage.removeItem('persist:auth');
    localStorage.removeItem('token');

    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
