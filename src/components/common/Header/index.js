import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';
import AuthNav from './AuthNav';

const Header = props => {
  const { isAuthenticated, dispatch } = props;
  return (
    <div>
      <Nav dispatch={dispatch} isAuthenticated={isAuthenticated} />
      {isAuthenticated && <AuthNav />}
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated } = authReducer;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(Header);
