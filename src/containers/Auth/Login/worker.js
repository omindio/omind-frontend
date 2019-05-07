import { put, call } from 'redux-saga/effects';

import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

import login from './service';

export default function* loginWorker(action) {
  try {
    const { values } = action;
    const response = yield call(login, values);
    yield put({ type: LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, response: error });
  }
}
