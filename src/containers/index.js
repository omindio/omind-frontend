import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import { middleware as AuthMiddleware } from '@utils/Auth';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const reduxLoger = process.env.NODE_ENV === 'development' ? require('redux-logger') : '';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, AuthMiddleware];

if (reduxLoger) {
  // const { logger } = require('redux-logger');

  middlewares.push(reduxLoger.logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
