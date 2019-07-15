import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { EMPLOYEE_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(EMPLOYEE_UPDATE_REQUEST, updateWorker);
}
