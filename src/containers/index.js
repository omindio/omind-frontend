import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';

import { middleware as AuthMiddleware } from '@utils/Auth';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(AuthMiddleware, sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
