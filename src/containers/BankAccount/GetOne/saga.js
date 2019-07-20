import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { BANK_ACCOUNT_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(BANK_ACCOUNT_GET_ONE_REQUEST, getOneWorker);
}
