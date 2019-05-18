import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { USER_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(USER_UPDATE_REQUEST, updateWorker);
}
