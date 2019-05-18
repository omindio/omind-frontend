import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from './Auth';
import { reducer as userReducer } from './User';
import { reducer as uiReducer } from './UI';

const appReducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage, blacklist: ['logout'] }, authReducer),
  user: persistReducer({ key: 'user', storage, whitelist: ['profile'] }, userReducer),
  ui: uiReducer,
});

const rootReducer = (stateParameter, action) => {
  let state = stateParameter;

  if (action.type === 'LOGOUT') {
    localStorage.removeItem('persist:root');

    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
