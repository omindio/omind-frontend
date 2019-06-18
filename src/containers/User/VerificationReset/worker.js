import { put, call } from 'redux-saga/effects';

import { USER_VERIFY_RESET_SUCCESS, USER_VERIFY_RESET_FAILURE } from './types';

import reset from './service';

export default function* verifyWorker(action) {
  try {
    const { email } = action;
    const response = yield call(reset, email);
    yield put({ type: USER_VERIFY_RESET_SUCCESS, response });
  } catch (error) {
    yield put({ type: USER_VERIFY_RESET_FAILURE, response: error });
  }
}
