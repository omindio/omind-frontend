import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { PROJECT_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(PROJECT_GET_ONE_REQUEST, getOneWorker);
}
