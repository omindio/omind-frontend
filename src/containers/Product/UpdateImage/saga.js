import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PRODUCT_UPDATE_IMAGE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PRODUCT_UPDATE_IMAGE_REQUEST, createWorker);
}
