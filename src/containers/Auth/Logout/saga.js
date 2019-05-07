import { takeLatest } from 'redux-saga/effects';
import logoutWorker from './worker';

import { LOGOUT_REQUEST } from './types';

export default function* logoutWatcher() {
  yield takeLatest(LOGOUT_REQUEST, logoutWorker);
}
