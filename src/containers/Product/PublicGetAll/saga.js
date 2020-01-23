import { takeLatest } from 'redux-saga/effects';
import getAllWorker from './worker';

import { PRODUCT_PUBLIC_GET_ALL_REQUEST } from './types';

export default function* getAll() {
  yield takeLatest(PRODUCT_PUBLIC_GET_ALL_REQUEST, getAllWorker);
}
