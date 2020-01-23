import { takeLatest } from 'redux-saga/effects';
import deleteWorker from './worker';

import { PRODUCT_DELETE_REQUEST } from './types';

export default function* deleteSaga() {
  yield takeLatest(PRODUCT_DELETE_REQUEST, deleteWorker);
}
