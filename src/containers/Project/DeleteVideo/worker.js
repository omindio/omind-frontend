import { put, call } from 'redux-saga/effects';

import { PROJECT_DELETE_VIDEO_SUCCESS, PROJECT_DELETE_VIDEO_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { projectId, videoId } = action;
    const response = yield call(deleteService, { projectId, videoId });
    yield put({ type: PROJECT_DELETE_VIDEO_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_DELETE_VIDEO_FAILURE, response: error });
  }
}
