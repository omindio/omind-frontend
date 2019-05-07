import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Role } from '@utils/Auth';

import './styles.scss';

const AuthNav = props => {
  const { userRole } = props;

  const isAdmin = userRole === Role.Admin;

  return (
    <nav>
      <NavLink to="/profile">Profile</NavLink>
      {isAdmin && <NavLink to="/users">Users</NavLink>}
    </nav>
  );
};

AuthNav.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default AuthNav;
