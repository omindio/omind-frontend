import { takeLatest } from 'redux-saga/effects';
import loginWorker from './worker';

import { LOGIN_REQUEST } from './types';

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginWorker);
}
