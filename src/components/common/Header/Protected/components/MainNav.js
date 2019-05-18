import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Navbar as NavbarBootstrap,
  Nav,
  Container,
  NavDropdown as NavDropdownBootstrap,
} from 'react-bootstrap';

import { logoutAction } from '@containers/Auth/Logout';

import { LogoWhite } from '@components/common/Logo';

const Logo = styled(NavbarBootstrap.Brand)`
  padding: 0;
`;

const Navbar = styled(NavbarBootstrap)`
  padding: 1rem 2.2rem;
`;

const NavDropdown = styled(NavDropdownBootstrap)`
  a.nav-link {
    font-size: 1rem;
    color: #fff;
  }
`;

const MainNav = props => {
  const { dispatch } = props;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid="true">
        <Logo href="/">
          <LogoWhite />
        </Logo>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap className="p-0">
          <Nav className="ml-auto p-0">
            <NavDropdown title="David González Hidalgo" id="basic-nav-dropdown">
              <NavDropdownBootstrap.Item href="/settings">Profile</NavDropdownBootstrap.Item>
              <NavDropdownBootstrap.Divider />
              <NavDropdownBootstrap.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdownBootstrap.Item>
            </NavDropdown>
          </Nav>
        </NavbarBootstrap>
      </Container>
    </Navbar>
  );
};

MainNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default MainNav;
