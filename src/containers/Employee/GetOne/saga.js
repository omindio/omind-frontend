import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { EMPLOYEE_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(EMPLOYEE_GET_ONE_REQUEST, getOneWorker);
}
