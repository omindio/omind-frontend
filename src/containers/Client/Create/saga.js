import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { CLIENT_CREATE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(CLIENT_CREATE_REQUEST, createWorker);
}
