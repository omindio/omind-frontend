import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authActions } from 'containers/Auth';

// TODO: Think about add tokenRefresh
const checkAuth = (isAuthenticated, dispatch, allowedRoles, user) => {
  // const { isAuthenticated, dispatch } = this.props;
  if (!isAuthenticated) {
    return false;
  }

  if (!allowedRoles.includes(user.role)) {
    /*
      TODO: Return 404 or not authorized.
    */
    return false;
  }

  try {
    const tokenExpires = localStorage.getItem('token_expires');
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
  user,
  dispatch,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      checkAuth(isAuthenticated, dispatch, allowedRoles, user) ? (
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
};

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated, user } = authReducer;
  return {
    isAuthenticated,
    user,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
