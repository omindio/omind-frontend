import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { CLIENT_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(CLIENT_UPDATE_REQUEST, updateWorker);
}
