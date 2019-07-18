import { takeLatest } from 'redux-saga/effects';
import contactWorker from './worker';

import { CONTACT_REQUEST } from './types';

export default function* contactWatcher() {
  yield takeLatest(CONTACT_REQUEST, contactWorker);
}
