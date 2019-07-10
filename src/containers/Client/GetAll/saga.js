import { takeLatest } from 'redux-saga/effects';
import getAllWorker from './worker';

import { CLIENT_GET_ALL_REQUEST } from './types';

export default function* getAll() {
  yield takeLatest(CLIENT_GET_ALL_REQUEST, getAllWorker);
}
