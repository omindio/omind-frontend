import { put, call } from 'redux-saga/effects';

import { PROJECT_PUBLIC_GET_ONE_SUCCESS, PROJECT_PUBLIC_GET_ONE_FAILURE } from './types';

import getOne from './service';

export default function* getOneWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getOne, values);
    yield put({ type: PROJECT_PUBLIC_GET_ONE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PROJECT_PUBLIC_GET_ONE_FAILURE, response: error });
  }
}
