import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

/*
  TODO: Arreglar la duplicación de persistencia para los modulos user y auth.
*/
const rootPReducer = persistReducer(
  {
    key: 'root',
    storage,
    blacklist: ['ui'],
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootPReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
