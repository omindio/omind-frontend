import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { PRODUCT_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(PRODUCT_UPDATE_REQUEST, updateWorker);
}
