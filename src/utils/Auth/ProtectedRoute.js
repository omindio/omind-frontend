import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutAction } from '@containers/Auth/Logout';

/*
  TODO: Think about connect to store in parent (AppRoute)
*/

const checkAuth = (isAuthenticated, userRole, tokenExpires, allowedRoles, dispatch) => {
  if (!isAuthenticated) {
    return false;
  }

  if (!allowedRoles.includes(userRole)) {
    return false;
  }

  try {
    if (tokenExpires < new Date().getTime() / 1000) {
      dispatch(logoutAction());
    }
  } catch (e) {
    return false;
  }

  return true;
};

const ProtectedRoute = ({
  component: Component,
  allowedRoles,
  isAuthenticated,
  tokenExpires,
  userRole,
  dispatch,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      checkAuth(isAuthenticated, userRole, tokenExpires, allowedRoles, dispatch) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allowedRoles: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  tokenExpires: PropTypes.number,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { isAuthenticated, tokenExpires, userRole } = login;
  return {
    isAuthenticated,
    userRole,
    tokenExpires,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
