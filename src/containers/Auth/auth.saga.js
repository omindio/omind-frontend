import { takeLatest } from 'redux-saga/effects';
import { loginWorker, logoutWorker } from './auth.worker';

import { LOGIN_REQUEST, LOGOUT_REQUEST } from './auth.types';

export function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}

export function* logoutWatcher() {
  yield takeLatest(LOGOUT_REQUEST, logoutWorker);
}
