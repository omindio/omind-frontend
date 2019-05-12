import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { throttle } from 'lodash';

import state from '@utils/LocalStorage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistedState = state.load();
const AppStore = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware, logger));

AppStore.subscribe(
  throttle(() => {
    state.save({
      auth: AppStore.getState().auth,
    });
  }, 1000),
);

sagaMiddleware.run(rootSaga);

export default AppStore;
