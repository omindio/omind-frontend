import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

const Navbar = styled(NavbarBootstrap)`
  ${MediaQueries.xs`padding: 0 1rem;`}
  ${MediaQueries.sm`
  padding: 0 1.5rem;
  border-style: solid;
  border-color: #eee;
  border-width: 1px 1px 0 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`}
  ${MediaQueries.md`padding: 0 1.8rem;`}
  ${MediaQueries.lg`padding: 0 2.2rem;`}

  background: #fff;
  border-style: solid;
  border-color: #eee;
  border-width: 1px 1px 0 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

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
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          border-bottom: 2px solid #0d1111;
        }
      }
    }
  }
`;

const SettingsNav = () => {
  return (
    <Navbar>
      <Nav.Item>
        <NavLink exact className="nav-link" activeClassName="active" to="/users">
          List
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" activeClassName="active" to="/users/add">
          Add New
        </NavLink>
      </Nav.Item>
    </Navbar>
  );
};

export default SettingsNav;
