import { takeLatest } from 'redux-saga/effects';
import getAllWorker from './worker';

import { EMPLOYEE_GET_ALL_REQUEST } from './types';

export default function* getAll() {
  yield takeLatest(EMPLOYEE_GET_ALL_REQUEST, getAllWorker);
}
