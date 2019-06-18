import { takeLatest } from 'redux-saga/effects';
import deleteWorker from './worker';

import { USER_DELETE_REQUEST } from './types';

export default function* deleteSaga() {
  yield takeLatest(USER_DELETE_REQUEST, deleteWorker);
}
