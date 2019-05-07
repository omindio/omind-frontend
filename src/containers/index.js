import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { throttle } from 'lodash';

import { State } from '@utils/LocalStorage';

import Reducer from './reducer';
import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistedState = State.load();
const AppStore = createStore(Reducer, persistedState, applyMiddleware(sagaMiddleware, logger));

AppStore.subscribe(
  throttle(() => {
    State.save({
      auth: AppStore.getState().auth,
    });
  }, 1000),
);

sagaMiddleware.run(Saga);

export default AppStore;
