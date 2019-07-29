import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PROJECT_UPDATE_IMAGE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PROJECT_UPDATE_IMAGE_REQUEST, createWorker);
}
