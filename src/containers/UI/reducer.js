import { combineReducers } from 'redux';
import { reducer as navReducer } from './Nav';

const reducer = combineReducers({
  nav: navReducer,
});

export default reducer;
