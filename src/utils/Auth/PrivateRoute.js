import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import jwt from 'jsonwebtoken';

import { authActions } from 'containers/Auth';

// TODO: Think about add tokenRefresh
const checkAuth = (isAuthenticated, dispatch) => {
  // const { isAuthenticated, dispatch } = this.props;
  const token = localStorage.getItem('token');

  if (!isAuthenticated) {
    return false;
  }

  try {
    const { exp } = jwt.decode(token);
    if (exp < new Date().getTime() / 1000) {
      // dispatch logout
      dispatch(authActions.logoutAction());
      // return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, isAuthenticated, dispatch, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth(isAuthenticated, dispatch) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated } = authReducer;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
