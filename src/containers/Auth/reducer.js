import { combineReducers } from 'redux';

import { reducer as loginReducer } from './Login';
import { reducer as LogoutReducer } from './Logout';

const reducer = combineReducers({
  login: loginReducer,
  logout: LogoutReducer,
});

export default reducer;
