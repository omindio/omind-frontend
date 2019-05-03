import { takeLatest } from 'redux-saga/effects';
import { userProfileWorker, loadDataWorker } from './userProfile.worker';

import { UPDATE_PROFILE_REQUEST, LOAD_DATA_REQUEST } from './userProfile.types';

export function* loadDataWatcher() {
  yield takeLatest(LOAD_DATA_REQUEST, loadDataWorker);
}

export function* userProfileWatcher() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, userProfileWorker);
}
