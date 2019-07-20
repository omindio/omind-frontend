import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';
import { reducer as getOneReducer } from './GetOne';

const reducer = combineReducers({
  update: updateReducer,
  getOne: getOneReducer,
});

export default reducer;
