import { put, call } from 'redux-saga/effects';

import { CONTACT_SUCCESS, CONTACT_FAILURE } from './types';

import contact from './service';

export default function* contactWorker(action) {
  try {
    const { values } = action;
    const response = yield call(contact, values);
    yield put({ type: CONTACT_SUCCESS, response });
  } catch (error) {
    yield put({ type: CONTACT_FAILURE, response: error });
  }
}
