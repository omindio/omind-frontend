import { put, call } from 'redux-saga/effects';

import { USER_VERIFY_SUCCESS, USER_VERIFY_FAILURE } from './types';

import verify from './service';

export default function* verifyWorker(action) {
  try {
    const { token } = action;
    const response = yield call(verify, token);
    yield put({ type: USER_VERIFY_SUCCESS, response });
  } catch (error) {
    yield put({ type: USER_VERIFY_FAILURE, response: error });
  }
}
