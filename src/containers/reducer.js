import { combineReducers } from 'redux';
import { authReducer } from './Auth';
import { userProfileReducer } from './UserProfile';

const rootReducer = combineReducers({
  authReducer,
  userProfileReducer
});

export default rootReducer;
