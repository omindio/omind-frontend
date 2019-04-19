import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { createBrowserHistory } from 'history';

// routes
import AppRoute from 'routes';

// components
import Nav from 'components/common/Nav';
import AuthNav from 'components/common/AuthNav';

const history = createBrowserHistory();

const App = props => {
  const { isAuthenticated } = props;

  return (
    <Router history={history}>
      <div>
        <Nav isAuthenticated={isAuthenticated} />

        {isAuthenticated && <AuthNav />}

        <AppRoute />
      </div>
    </Router>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated, error } = authReducer;
  return {
    isAuthenticated,
    error,
  };
}

export default connect(mapStateToProps)(App);
