import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

import {
  MdPeopleOutline,
  MdSettings,
  MdDashboard,
  MdBusinessCenter,
  MdGroupWork,
  MdWork,
} from 'react-icons/md';

import { Role } from '@utils/Auth';

const Navbar = styled(NavbarBootstrap)`
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  &::-webkit-scrollbar {
      display: none;
  }
  ${MediaQueries.xs`padding: 0 1rem; margin-bottom: 0;`}
  ${MediaQueries.sm`padding: 0 1.5rem; margin-bottom: 1.3rem;`}
  ${MediaQueries.md`padding: 0 1.8rem; margin-bottom: 1.5rem;`}
  ${MediaQueries.lg`padding: 0 1.8rem; margin-bottom: 2rem;`}
  box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
  background: #fff;
  .nav-item {
    position: relative;
    margin-left: 1.5rem;
    &:first-child {
      margin-left: 0;
    }
    a {
      font-size: 1rem;
      color: rgba(17, 51, 83, 0.6);
      padding: 1rem 0;
      font-weight: 400;
      &.active {
        color: #0d1111;
        text-decoration: none;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          border-bottom: 2px solid #0d1111;
        }
      }
      svg {
        margin-top: -2px;
        margin-right: 0.5rem;
        font-size: 1.2rem;
        line-height: 1rem;
        ${MediaQueries.xs`display:none;`}
        ${MediaQueries.md`display:inline-block;`}
      }
    }
  }
`;

const PagesNav = props => {
  const { userRole } = props;

  const isAdmin = userRole === Role.Admin;
  return (
    <Navbar>
      <Nav.Item>
        <NavLink className="nav-link" activeClassName="active" to="/dashboard">
          <MdDashboard />
          Dashboard
        </NavLink>
      </Nav.Item>

      {isAdmin && (
        <>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/users">
              <MdPeopleOutline />
              Users
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/clients">
              <MdBusinessCenter />
              Clients
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/employees">
              <MdGroupWork />
              Employees
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/projects">
              <MdWork />
              Projects
            </NavLink>
          </Nav.Item>
        </>
      )}

      <Nav.Item>
        <NavLink className="nav-link" activeClassName="active" to="/settings">
          <MdSettings />
          Settings
        </NavLink>
      </Nav.Item>
    </Navbar>
  );
};

PagesNav.propTypes = {
  userRole: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { login } = state.auth;
  const { userRole } = login;
  return {
    userRole,
  };
}

export default connect(mapStateToProps)(PagesNav);
