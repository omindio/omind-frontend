import { combineReducers } from 'redux';
import { authReducer } from './Auth';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
