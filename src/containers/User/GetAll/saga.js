import { takeLatest } from 'redux-saga/effects';
import getAllWorker from './worker';

import { USER_GET_ALL_REQUEST } from './types';

export default function* getAll() {
  yield takeLatest(USER_GET_ALL_REQUEST, getAllWorker);
}
