import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';
import { reducer as deleteReducer } from './Delete';
import { reducer as createReducer } from './Create';
import { reducer as getOneReducer } from './GetOne';
import { reducer as profileReducer } from './Profile';
import { reducer as getAllReducer } from './GetAll';
import { reducer as verificationReducer } from './Verification';
import { reducer as verificationResetReducer } from './VerificationReset';

const reducer = combineReducers({
  update: updateReducer,
  create: createReducer,
  delete: deleteReducer,
  getOne: getOneReducer,
  getAll: getAllReducer,
  profile: profileReducer,
  verification: verificationReducer,
  verificationReset: verificationResetReducer,
});

export default reducer;
