import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { PROJECT_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(PROJECT_UPDATE_REQUEST, updateWorker);
}
