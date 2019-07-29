import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PROJECT_CREATE_IMAGE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PROJECT_CREATE_IMAGE_REQUEST, createWorker);
}
