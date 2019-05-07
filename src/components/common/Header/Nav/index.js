import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

import { logoutAction } from '@containers/Auth/Logout';

const Nav = props => {
  const { isAuthenticated, dispatch } = props;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="/proyects">Our Work</NavLink>
      <NavLink to="/contact">Lets Talk</NavLink>

      {isAuthenticated ? (
        <button onClick={handleLogout} type="button">
          Logout
        </button>
      ) : (
        <NavLink to="/login">Sign in</NavLink>
      )}
    </nav>
  );
};

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Nav;
