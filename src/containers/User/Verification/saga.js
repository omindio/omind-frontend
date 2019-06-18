import { takeLatest } from 'redux-saga/effects';
import verifyWorker from './worker';

import { USER_VERIFY_REQUEST } from './types';

export default function* verify() {
  yield takeLatest(USER_VERIFY_REQUEST, verifyWorker);
}
