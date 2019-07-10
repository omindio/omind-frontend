import { takeLatest } from 'redux-saga/effects';
import deleteWorker from './worker';

import { CLIENT_DELETE_REQUEST } from './types';

export default function* deleteSaga() {
  yield takeLatest(CLIENT_DELETE_REQUEST, deleteWorker);
}
