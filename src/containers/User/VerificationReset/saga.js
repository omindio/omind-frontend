import { takeLatest } from 'redux-saga/effects';
import resetWorker from './worker';

import { USER_VERIFY_RESET_REQUEST } from './types';

export default function* reset() {
  yield takeLatest(USER_VERIFY_RESET_REQUEST, resetWorker);
}
