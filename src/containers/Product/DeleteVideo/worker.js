import { put, call } from 'redux-saga/effects';

import { PRODUCT_DELETE_VIDEO_SUCCESS, PRODUCT_DELETE_VIDEO_FAILURE } from './types';

import deleteService from './service';

export default function* deleteWorker(action) {
  try {
    const { productId, videoId } = action;
    const response = yield call(deleteService, { productId, videoId });
    yield put({ type: PRODUCT_DELETE_VIDEO_SUCCESS, response });
  } catch (error) {
    yield put({ type: PRODUCT_DELETE_VIDEO_FAILURE, response: error });
  }
}
