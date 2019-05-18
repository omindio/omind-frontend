/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { actions } from '@containers/UI/Nav';

import { Container, Row, Col } from 'react-bootstrap';

const ContentStyled = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
`;

const MainNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1.5rem;
    font-weight: 700;
    &.disabled {
      opacity: 0.1;
    }
    a {
      color: #0e1111;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    .active {
      text-decoration: underline;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SocialMediaNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: inherit;
    }
  }
`;
const Content = props => {
  const { isAuthenticated, close } = props;
  return (
    <ContentStyled className="bg-secondary">
      <Container className="h-100 w-100">
        <Row className="h-100">
          <Col xs={9} className="m-0 vh-100 d-flex flex-column justify-content-center">
            <MainNav>
              <li className="title">
                <NavLink onClick={close} exact activeClassName="active" to="/">
                  About
                </NavLink>
                .
              </li>
              <li className="title disabled">
                <NavLink onClick={close} activeClassName="active" to="/proyects">
                  Our Work
                </NavLink>
                .
              </li>
              <li className="title disabled">
                <NavLink onClick={close} activeClassName="active" to="/products">
                  Products
                </NavLink>
                .
              </li>
              <li className="title">
                <NavLink onClick={close} activeClassName="active" to="/contact">
                  Lets Talk
                </NavLink>
                .
              </li>
              {!isAuthenticated ? (
                <li className="title">
                  <NavLink onClick={close} activeClassName="active" to="/login">
                    Sign in
                  </NavLink>
                  .
                </li>
              ) : (
                <li className="title">
                  <NavLink onClick={close} activeClassName="active" to="/dashboard">
                    Dashboard
                  </NavLink>
                  .
                </li>
              )}
            </MainNav>
          </Col>
          <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
            <SocialMediaNav>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Omind Linkedin"
                  href="https://www.linkedin.com/company/omindbrand/"
                >
                  Linkedin
                </a>
                .
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Omind Instagram"
                  href="https://www.instagram.com/omindbrand/"
                >
                  Instagram
                </a>
                .
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Omind Facebook"
                  href="https://www.facebook.com/omindbrand/"
                >
                  Facebook
                </a>
                .
              </li>
            </SocialMediaNav>
          </Col>
        </Row>
      </Container>
    </ContentStyled>
  );
};

function mapStateToProps(state) {
  const { login } = state.auth;
  const { isAuthenticated } = login;
  return {
    isAuthenticated,
  };
}

const mapDispatchToProps = dispatch => {
  const { closeAction } = actions;
  return {
    close: () => dispatch(closeAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
