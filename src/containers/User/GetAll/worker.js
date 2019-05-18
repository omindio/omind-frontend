import { put, call } from 'redux-saga/effects';

import { USER_GET_ALL_SUCCESS, USER_GET_ALL_FAILURE } from './types';

import getAll from './service';

export default function* getOneWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getAll, values);
    yield put({ type: USER_GET_ALL_SUCCESS, response });
  } catch (error) {
    yield put({ type: USER_GET_ALL_FAILURE, response: error });
  }
}
