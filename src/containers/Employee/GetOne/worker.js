import { put, call } from 'redux-saga/effects';

import { EMPLOYEE_GET_ONE_SUCCESS, EMPLOYEE_GET_ONE_FAILURE } from './types';

import getOne from './service';

export default function* getOneWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getOne, values);
    yield put({ type: EMPLOYEE_GET_ONE_SUCCESS, response });
  } catch (error) {
    yield put({ type: EMPLOYEE_GET_ONE_FAILURE, response: error });
  }
}
