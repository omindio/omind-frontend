import { put, call } from 'redux-saga/effects';

import { CLIENT_CREATE_SUCCESS, CLIENT_CREATE_FAILURE } from './types';

import create from './service';

export default function* createWorker(action) {
  try {
    const { values } = action;
    const response = yield call(create, values);
    yield put({ type: CLIENT_CREATE_SUCCESS, response });
  } catch (error) {
    yield put({ type: CLIENT_CREATE_FAILURE, response: error });
  }
}
