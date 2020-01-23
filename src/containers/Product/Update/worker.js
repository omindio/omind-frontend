import { put, call } from 'redux-saga/effects';

import { PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAILURE } from './types';

import update from './service';

export default function* updateWorker(action) {
  try {
    const { values } = action;
    const response = yield call(update, values);
    yield put({ type: PRODUCT_UPDATE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_UPDATE_FAILURE, response: error });
  }
}
