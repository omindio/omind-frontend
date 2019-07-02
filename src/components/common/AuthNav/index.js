import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
};

export default Nav;
