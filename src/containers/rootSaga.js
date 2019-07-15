import { fork, all } from 'redux-saga/effects';

import { saga as userSaga } from './User';
import { saga as clientSaga } from './Client';
import { saga as EmployeeSaga } from './Employee';
import { saga as authSaga } from './Auth';

const getWatchers = sagas => {
  const watchers = [];
  for (const saga of sagas) {
    const modules = Object.values(saga);
    for (const module of modules) {
      watchers.push(...Object.values(module));
    }
  }
  return watchers;
};

export default function* rootSaga() {
  yield all([...getWatchers([authSaga, userSaga, clientSaga, EmployeeSaga])].map(fork));
}
