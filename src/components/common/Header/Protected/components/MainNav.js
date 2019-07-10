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
  ${MediaQueries.xs`padding: 0.65rem 1rem;`}
  ${MediaQueries.sm`padding: 0.68rem 1.5rem;`}
  ${MediaQueries.md`padding: 0.7rem 1.8rem;`}
  ${MediaQueries.lg`padding: 0.75rem 2.2rem;`}
`;

const NavDropdown = styled(NavDropdownBootstrap)`
  a.nav-link {
    font-weight: 400;
    font-size: 1rem;
    color: #fff;
  }
  .dropdown-menu {
    border: 0;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
    left: -30%;
    a {
      padding: 0.5rem 1.5rem;
      color: #6b6e71;
      &.active,
      &:active {
        background: transparent;
        font-weight: 600;
      }
    }
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
                Sign Out
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
