import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PROJECT_UPDATE_VIDEO_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PROJECT_UPDATE_VIDEO_REQUEST, createWorker);
}
