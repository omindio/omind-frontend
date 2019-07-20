import { fork, all } from 'redux-saga/effects';

import { saga as userSaga } from './User';
import { saga as clientSaga } from './Client';
import { saga as employeeSaga } from './Employee';
import { saga as authSaga } from './Auth';
import { saga as contactSaga } from './Contact';
import { saga as bankAccountSaga } from './BankAccount';

const getWatchers = sagas => {
  const watchers = [];
  for (const saga of sagas) {
    if (typeof saga === 'object') {
      const modules = Object.values(saga);
      for (const module of modules) {
        watchers.push(...Object.values(module));
      }
    } else {
      watchers.push(saga);
    }
  }
  return watchers;
};

export default function* rootSaga() {
  yield all(
    [
      ...getWatchers([authSaga, userSaga, clientSaga, employeeSaga, bankAccountSaga, contactSaga]),
    ].map(fork),
  );
}
