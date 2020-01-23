import { put, call } from 'redux-saga/effects';

import { PRODUCT_DELETE_IMAGE_SUCCESS, PRODUCT_DELETE_IMAGE_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { productId, imageId } = action;
    const response = yield call(deleteService, { productId, imageId });
    yield put({ type: PRODUCT_DELETE_IMAGE_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_DELETE_IMAGE_FAILURE, response: error });
  }
}
