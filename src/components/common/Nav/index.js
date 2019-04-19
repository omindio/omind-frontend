import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const Nav = props => {
  const { isAuthenticated } = props;

  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="/proyects">Our Work</NavLink>
      <NavLink to="/contact">Lets Talk</NavLink>

      {isAuthenticated ? (
        <NavLink to="/logout">Sign out</NavLink>
      ) : (
        <NavLink to="/login">Sign in</NavLink>
      )}
    </nav>
  );
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Nav;
