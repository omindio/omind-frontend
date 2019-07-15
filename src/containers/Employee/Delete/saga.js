import { takeLatest } from 'redux-saga/effects';
import deleteWorker from './worker';

import { EMPLOYEE_DELETE_REQUEST } from './types';

export default function* deleteSaga() {
  yield takeLatest(EMPLOYEE_DELETE_REQUEST, deleteWorker);
}
