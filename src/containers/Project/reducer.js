import { combineReducers } from 'redux';
import { reducer as updateReducer } from './Update';
import { reducer as deleteReducer } from './Delete';
import { reducer as createReducer } from './Create';
import { reducer as getOneReducer } from './GetOne';
import { reducer as getAllReducer } from './GetAll';
import { reducer as getPublicOneReducer } from './PublicGetOne';
import { reducer as getPublicAllReducer } from './PublicGetAll';
import { reducer as deleteImageReducer } from './DeleteImage';
import { reducer as createImageReducer } from './CreateImage';
import { reducer as updateImageReducer } from './UpdateImage';

const reducer = combineReducers({
  update: updateReducer,
  create: createReducer,
  delete: deleteReducer,
  getOne: getOneReducer,
  getAll: getAllReducer,
  getPublicOne: getPublicOneReducer,
  getPublicAll: getPublicAllReducer,
  deleteImage: deleteImageReducer,
  createImage: createImageReducer,
  updateImage: updateImageReducer,
});

export default reducer;
