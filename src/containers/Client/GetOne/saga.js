import { takeLatest } from 'redux-saga/effects';
import getOneWorker from './worker';

import { CLIENT_GET_ONE_REQUEST } from './types';

export default function* getOne() {
  yield takeLatest(CLIENT_GET_ONE_REQUEST, getOneWorker);
}
