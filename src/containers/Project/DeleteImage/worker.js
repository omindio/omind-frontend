import { put, call } from 'redux-saga/effects';

import { PROJECT_DELETE_IMAGE_SUCCESS, PROJECT_DELETE_IMAGE_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { projectId, imageId } = action;
    const response = yield call(deleteService, { projectId, imageId });
    yield put({ type: PROJECT_DELETE_IMAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_DELETE_IMAGE_FAILURE, response: error });
  }
}
