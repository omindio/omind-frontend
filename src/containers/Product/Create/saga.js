import { takeLatest } from 'redux-saga/effects';
import createWorker from './worker';

import { PRODUCT_CREATE_REQUEST } from './types';

export default function* createWatcher() {
  yield takeLatest(PRODUCT_CREATE_REQUEST, createWorker);
}
