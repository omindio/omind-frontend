import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authActions } from '@containers/Auth';

// TODO: Think about add tokenRefresh
const checkAuth = (isAuthenticated, userRole, tokenExpires, allowedRoles, dispatch) => {
  if (!isAuthenticated) {
    return false;
  }

  if (!allowedRoles.includes(userRole)) {
    return false;
  }

  try {
    if (tokenExpires < new Date().getTime() / 1000) {
      // dispatch logout
      dispatch(authActions.logoutAction());
      // return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

const PrivateRoute = ({
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

/*
TODO: add user, allowedRoles and component prop-types
*/
PrivateRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allowedRoles: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  tokenExpires: PropTypes.number,
};

const mapStateToProps = state => {
  const { authReducer } = state;
  const { isAuthenticated, tokenExpires, userRole } = authReducer;
  return {
    isAuthenticated,
    userRole,
    tokenExpires,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
