import { combineReducers } from 'redux';

import { reducer as loginReducer } from './Login';
import { reducer as logoutReducer } from './Logout';
import { reducer as profileReducer } from './Profile';

const reducer = combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  profile: profileReducer,
});

export default reducer;
