import { takeLatest } from 'redux-saga/effects';
import deleteWorker from './worker';

import { PROJECT_DELETE_VIDEO_REQUEST } from './types';

export default function* deleteSaga() {
  yield takeLatest(PROJECT_DELETE_VIDEO_REQUEST, deleteWorker);
}
