import React from 'react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import AppRoute from 'routes';
import Header from 'components/common';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <AppRoute />
      </div>
    </Router>
  );
};

export default App;
