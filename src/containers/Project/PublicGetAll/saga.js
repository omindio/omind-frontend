import { takeLatest } from 'redux-saga/effects';
import getAllWorker from './worker';

import { PROJECT_PUBLIC_GET_ALL_REQUEST } from './types';

export default function* getAll() {
  yield takeLatest(PROJECT_PUBLIC_GET_ALL_REQUEST, getAllWorker);
}
