import { takeLatest } from 'redux-saga/effects';
import updateWorker from './worker';

import { BANK_ACCOUNT_UPDATE_REQUEST } from './types';

export default function* updateWatcher() {
  yield takeLatest(BANK_ACCOUNT_UPDATE_REQUEST, updateWorker);
}
