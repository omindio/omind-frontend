import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { createBrowserHistory } from 'history';
import AppRoute from '@routes';

import { store, persistor } from '@containers';

import './styles/main.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <AppRoute />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
