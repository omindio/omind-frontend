import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';

import AppRoute from '@routes';
import { Header } from '@components/common';
import { Store } from '@containers';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={Store}>
      <Router history={history}>
        <div>
          <Header />
          <AppRoute />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
