/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Navbar as NavbarBootstrap, Nav } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

const Navbar = styled(NavbarBootstrap)`
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  &::-webkit-scrollbar {
      display: none;
  }
  padding: 0 1rem;
  ${MediaQueries.xs`border: 0;`}
  ${MediaQueries.sm`
    padding: 0 1.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `}
  ${MediaQueries.md`padding: 0 1.5rem;`}
  ${MediaQueries.lg`padding: 0 2rem;`}

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
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 1px;
          border-bottom: 2px solid #0d1111;
        }
      }
    }
  }
`;

const SectionNav = props => {
  const { values } = props;

  const items = values.map((item, index) => {
    return [
      <Nav.Item key={index}>
        <NavLink exact className="nav-link" activeClassName="active" to={item.url}>
          {item.name}
        </NavLink>
      </Nav.Item>,
    ];
  }, this);

  return <Navbar>{items}</Navbar>;
};

export default SectionNav;
