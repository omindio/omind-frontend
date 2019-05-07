import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';
import AuthNav from './AuthNav';

const Header = props => {
  const { isAuthenticated, userRole, dispatch } = props;
  return (
    <div>
      <Nav dispatch={dispatch} isAuthenticated={isAuthenticated} />
      {isAuthenticated && <AuthNav userRole={userRole} />}
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userRole: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { login } = state.auth;
  const { isAuthenticated, userRole } = login;
  return {
    isAuthenticated,
    userRole,
  };
}

export default connect(mapStateToProps)(Header);
