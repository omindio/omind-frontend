import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { USER_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(USER_GET_ONE_REQUEST, getOneWorker);
}
