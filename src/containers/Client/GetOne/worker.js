import { put, call } from 'redux-saga/effects';

import { CLIENT_GET_ONE_SUCCESS, CLIENT_GET_ONE_FAILURE } from './types';

import getOne from './service';

export default function* getOneWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getOne, values);
    yield put({ type: CLIENT_GET_ONE_SUCCESS, response });
  } catch (error) {
    yield put({ type: CLIENT_GET_ONE_FAILURE, response: error });
  }
}
