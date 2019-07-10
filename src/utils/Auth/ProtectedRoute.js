import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const checkAuth = (isAuthenticated, userRole, allowedRoles) => {
  if (!isAuthenticated) {
    return false;
  }

  if (!allowedRoles.includes(userRole)) {
    return false;
  }

  return true;
};

const ProtectedRoute = ({
  component: Component,
  allowedRoles,
  isAuthenticated,
  userRole,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      checkAuth(isAuthenticated, userRole, allowedRoles) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allowedRoles: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  tokenExpires: PropTypes.number,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { isAuthenticated, /* tokenExpires, */ userRole } = login;
  return {
    isAuthenticated,
    userRole,
    // tokenExpires,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
