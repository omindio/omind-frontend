import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { throttle } from 'lodash';

import { saveState, loadState } from './localStorage';

import Reducer from './reducer';
import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = createStore(Reducer, persistedState, applyMiddleware(sagaMiddleware, logger));

store.subscribe(
  throttle(() => {
    saveState({
      authReducer: store.getState().authReducer,
    });
  }, 1000),
);

sagaMiddleware.run(Saga);

export default store;
