import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MainNav, PagesNav } from './components';

const HeaderProtected = props => {
  const { userRole, dispatch } = props;
  return (
    <header>
      <MainNav dispatch={dispatch} />
      <PagesNav userRole={userRole} />
    </header>
  );
};

HeaderProtected.propTypes = {
  userRole: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { login } = state.auth;
  const { userRole } = login;
  return {
    userRole,
  };
}

export default connect(mapStateToProps)(HeaderProtected);
