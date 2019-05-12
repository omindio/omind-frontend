import { put, call } from 'redux-saga/effects';

import {
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './types';

import * as Service from './service';

export function* loadDataWorker(action) {
  try {
    const { values } = action;
    const response = yield call(Service.loadData, values);
    yield put({ type: LOAD_DATA_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOAD_DATA_FAILURE, response: error });
  }
}

export function* updateWorker(action) {
  try {
    const { values } = action;
    const response = yield call(Service.update, values);
    yield put({ type: USER_UPDATE_SUCCESS, response });
  } catch (error) {
    yield put({ type: USER_UPDATE_FAILURE, response: error });
  }
}
