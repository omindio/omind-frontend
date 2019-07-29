import { put, call } from 'redux-saga/effects';

import { PROJECT_UPDATE_IMAGE_SUCCESS, PROJECT_UPDATE_IMAGE_FAILURE } from './types';

import create from './service';

export default function* createWorker(action) {
  try {
    const { values } = action;
    const response = yield call(create, values);
    yield put({ type: PROJECT_UPDATE_IMAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_UPDATE_IMAGE_FAILURE, response: error });
  }
}
