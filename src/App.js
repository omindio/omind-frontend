import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';

import { Main } from '@components/layouts';
import AppStore from '@containers';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={AppStore}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );
};

export default App;
