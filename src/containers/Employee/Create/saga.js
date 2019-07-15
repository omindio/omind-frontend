import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { EMPLOYEE_CREATE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(EMPLOYEE_CREATE_REQUEST, createWorker);
}
