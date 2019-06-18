import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { USER_CREATE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(USER_CREATE_REQUEST, createWorker);
}
