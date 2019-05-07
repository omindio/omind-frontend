import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';

const reducer = combineReducers({
  update: updateReducer,
});

export default reducer;
