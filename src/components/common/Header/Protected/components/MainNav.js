import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { MediaQueries } from '@utils/Styles';

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
  ${MediaQueries.xs`padding: 0.8rem 1rem;`}
  ${MediaQueries.sm`padding: 0.8rem 1.5rem;`}
  ${MediaQueries.md`padding: 0.9rem 1.8rem;`}
  ${MediaQueries.lg`padding: 1rem 2.2rem;`}
`;

const NavDropdown = styled(NavDropdownBootstrap)`
  a.nav-link {
    font-size: 1rem;
    color: #fff;
  }
`;

const MainNav = props => {
  const { logout, fullName } = props;

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid="true">
        <LinkContainer to="/">
          <Logo>
            <LogoWhite />
          </Logo>
        </LinkContainer>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap className="p-0">
          <Nav className="ml-auto p-0">
            <NavDropdown title={fullName} id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/settings">
                Profile
              </NavLink>
              <NavDropdownBootstrap.Divider />
              <NavDropdownBootstrap.Item href="#" onClick={logout}>
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
  fullName: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const { profile } = state.user;
  const { name, lastName } = profile.user;

  return {
    fullName: `${name} ${lastName}`,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    logout: () => dispatch(logoutAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainNav);
