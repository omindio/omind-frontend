import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import AppRoute from '@routes';

/*
import { Main } from '@components/layouts';
*/
import AppStore from '@containers';

import './styles.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={AppStore}>
      <Router history={history}>
        <AppRoute />
      </Router>
    </Provider>
  );
};

export default App;
