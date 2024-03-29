import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from 'react-router-scroll-top';

import { createBrowserHistory } from 'history';
import GA from '@utils/GoogleAnalytics';
import { CookieBanner } from '@components/common';

import AppRoute from '@routes';

import { store, persistor } from '@containers';

import './styles/main.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <>
            {GA.init() && <GA.RouteTracker />}
            <ScrollToTop>
              <AppRoute />
              <CookieBanner />
            </ScrollToTop>
          </>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
