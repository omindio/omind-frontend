import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PRODUCT_UPDATE_VIDEO_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PRODUCT_UPDATE_VIDEO_REQUEST, createWorker);
}
