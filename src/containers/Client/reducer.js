import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';
import { reducer as deleteReducer } from './Delete';
import { reducer as createReducer } from './Create';
import { reducer as getOneReducer } from './GetOne';
import { reducer as getAllReducer } from './GetAll';

const reducer = combineReducers({
  update: updateReducer,
  create: createReducer,
  delete: deleteReducer,
  getOne: getOneReducer,
  getAll: getAllReducer,
});

export default reducer;
