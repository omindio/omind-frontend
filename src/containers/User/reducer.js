import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';
import { reducer as getOneReducer } from './GetOne';
import { reducer as profileReducer } from './Profile';
import { reducer as getAllReducer } from './GetAll';

const reducer = combineReducers({
  update: updateReducer,
  getOne: getOneReducer,
  getAll: getAllReducer,
  profile: profileReducer,
});

export default reducer;
