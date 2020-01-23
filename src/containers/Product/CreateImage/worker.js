import { put, call } from 'redux-saga/effects';

import { PRODUCT_CREATE_IMAGE_SUCCESS, PRODUCT_CREATE_IMAGE_FAILURE } from './types';

import create from './service';

export default function* createWorker(action) {
  try {
    const { values } = action;
    const response = yield call(create, values);
    yield put({ type: PRODUCT_CREATE_IMAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_CREATE_IMAGE_FAILURE, response: error });
  }
}
