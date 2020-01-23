import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { PRODUCT_PUBLIC_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(PRODUCT_PUBLIC_GET_ONE_REQUEST, getOneWorker);
}
