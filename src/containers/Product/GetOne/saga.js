import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { PRODUCT_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(PRODUCT_GET_ONE_REQUEST, getOneWorker);
}
