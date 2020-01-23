import { put, call } from 'redux-saga/effects';

import { PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { id } = action;
    const response = yield call(deleteService, id);
    yield put({ type: PRODUCT_DELETE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_DELETE_FAILURE, response: error });
  }
}
