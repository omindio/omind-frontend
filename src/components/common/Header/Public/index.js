import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';

const HeaderPublic = props => {
  const { isAuthenticated, isOpen, dispatch, color } = props;
  return (
    <header>
      <Nav color={color} dispatch={dispatch} isOpen={isOpen} isAuthenticated={isAuthenticated} />
    </header>
  );
};

/*
{isAuthenticated && <AuthNav dispatch={dispatch} userRole={userRole} />}
*/

HeaderPublic.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
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

export default connect(mapStateToProps)(HeaderPublic);
