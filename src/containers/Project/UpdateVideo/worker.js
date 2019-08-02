import { put, call } from 'redux-saga/effects';

import { PROJECT_UPDATE_VIDEO_SUCCESS, PROJECT_UPDATE_VIDEO_FAILURE } from './types';

import create from './service';

export default function* createWorker(action) {
  try {
    const { values } = action;
    const response = yield call(create, values);
    yield put({ type: PROJECT_UPDATE_VIDEO_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_UPDATE_VIDEO_FAILURE, response: error });
  }
}
