import { combineReducers } from 'redux';

import { reducer as authReducer } from './Auth';

import { reducer as userReducer } from './User';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
