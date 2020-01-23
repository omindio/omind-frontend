import { put, call } from 'redux-saga/effects';

import { PRODUCT_PUBLIC_GET_ALL_SUCCESS, PRODUCT_PUBLIC_GET_ALL_FAILURE } from './types';

import getAll from './service';

export default function* getAllWorker(action) {
  try {
    const { values } = action;
    const response = yield call(getAll, values);
    yield put({ type: PRODUCT_PUBLIC_GET_ALL_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_PUBLIC_GET_ALL_FAILURE, response: error });
  }
}
