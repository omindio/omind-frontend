import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';
import { authActions } from '@containers/Auth';

const Nav = props => {
  const { isAuthenticated, dispatch } = props;

  const handleLogout = () => {
    dispatch(authActions.logoutAction());
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
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Nav;
