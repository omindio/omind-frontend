import { put, call } from 'redux-saga/effects';

import { PROJECT_PUBLIC_GET_ALL_SUCCESS, PROJECT_PUBLIC_GET_ALL_FAILURE } from './types';

import getAll from './service';

export default function* getAllWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getAll, values);
    yield put({ type: PROJECT_PUBLIC_GET_ALL_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_PUBLIC_GET_ALL_FAILURE, response: error });
  }
}
