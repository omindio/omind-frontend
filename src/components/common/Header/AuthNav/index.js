import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default AuthNav;
