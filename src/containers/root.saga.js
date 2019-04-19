import { fork } from 'redux-saga/effects';

import { authSaga } from './Auth';

export default function *rootSaga () {
    yield fork(authSaga.loginWatcher);
    yield fork(authSaga.logoutWatcher);
}
