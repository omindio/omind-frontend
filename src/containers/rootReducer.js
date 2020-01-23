import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as authReducer } from './Auth';
import { reducer as userReducer } from './User';
import { reducer as clientReducer } from './Client';
import { reducer as employeeReducer } from './Employee';
import { reducer as uiReducer } from './UI';
import { reducer as ContactReducer } from './Contact';
import { reducer as BankAccountReducer } from './BankAccount';
import { reducer as ProjectReducer } from './Project';
import { reducer as ProductReducer } from './Product';

const appReducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage, whitelist: ['login', 'profile'] }, authReducer),
  client: clientReducer,
  employee: employeeReducer,
  user: userReducer,
  contact: ContactReducer,
  bankAccount: BankAccountReducer,
  project: ProjectReducer,
  product: ProductReducer,
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
