import { fork } from 'redux-saga/effects';

import { authSaga } from './Auth';
import { userProfileSaga } from './UserProfile';

export default function* rootSaga() {
  yield fork(authSaga.loginWatcher);
  yield fork(authSaga.logoutWatcher);
  yield fork(userProfileSaga.loadDataWatcher);
  yield fork(userProfileSaga.userProfileWatcher);
}
