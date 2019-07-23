import { put, call } from 'redux-saga/effects';

import { PROJECT_DELETE_SUCCESS, PROJECT_DELETE_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { id } = action;
    const response = yield call(deleteService, id);
    yield put({ type: PROJECT_DELETE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_DELETE_FAILURE, response: error });
  }
}
