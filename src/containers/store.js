import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import Reducer from './root.reducer';
import Saga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(Saga);

export default store;
