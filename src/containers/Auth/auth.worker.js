import { put, call } from 'redux-saga/effects';

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './auth.types';

import loginService from './auth.service';

export function* loginWorker(action) {
  try {
    const response = yield call(loginService, action.creds);
    yield put({ type: LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, response: error });
  }
}

export function* logoutWorker() {
  try {
    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, response: error });
  }
}
