import { put, call } from 'redux-saga/effects';

import {
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
} from './userProfile.types';

import * as profileService from './userProfile.service';

export function* loadDataWorker(action) {
  try {
    const { values } = action;
    const response = yield call(profileService.loadData, values);
    yield put({ type: LOAD_DATA_SUCCESS, response });
  } catch (error) {
    yield put({ type: LOAD_DATA_FAILURE, response: error });
  }
}

export function* userProfileWorker(action) {
  try {
    const { values } = action;
    const response = yield call(profileService.update, values);
    yield put({ type: UPDATE_PROFILE_SUCCESS, response });
  } catch (error) {
    yield put({ type: UPDATE_PROFILE_FAILURE, response: error });
  }
}
