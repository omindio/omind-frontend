import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';
/*
import AuthNav from './AuthNav';
*/
const Header = props => {
  const { isAuthenticated, isOpen, dispatch } = props;
  return (
    <header>
      <Nav dispatch={dispatch} isOpen={isOpen} isAuthenticated={isAuthenticated} />
    </header>
  );
};

/*
{isAuthenticated && <AuthNav dispatch={dispatch} userRole={userRole} />}
*/

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { login } = state.auth;
  const { isAuthenticated } = login;
  const { nav } = state.ui;
  const { isOpen } = nav;
  return {
    isAuthenticated,
    isOpen,
  };
}

export default connect(mapStateToProps)(Header);
