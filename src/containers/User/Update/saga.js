import { takeLatest } from 'redux-saga/effects';
import { updateWorker, loadDataWorker } from './worker';

import { UPDATE_REQUEST, LOAD_DATA_REQUEST } from './types';

export function* loadDataWatcher() {
  yield takeLatest(LOAD_DATA_REQUEST, loadDataWorker);
}

export function* updateWatcher() {
  yield takeLatest(UPDATE_REQUEST, updateWorker);
}
