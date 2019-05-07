import { put, call } from 'redux-saga/effects';

import { LOGOUT_SUCCESS, LOGOUT_FAILURE } from './types';

import logout from './service';

export default function* logoutWorker() {
  try {
    yield call(logout);
    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, response: error });
  }
}
