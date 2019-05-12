import React from 'react';
import { logoutAction } from '@containers/Auth/Logout';
import PropTypes from 'prop-types';

import { Role } from '@utils/Auth';
import { Navbar, Nav, Button } from 'react-bootstrap';

const AuthNav = props => {
  const { userRole, dispatch } = props;

  const isAdmin = userRole === Role.Admin;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          {isAdmin && <Nav.Link href="/users">Users</Nav.Link>}
          <Navbar.Text>
            <Button onClick={handleLogout} type="submit">
              Logout
            </Button>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

AuthNav.propTypes = {
  userRole: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default AuthNav;
