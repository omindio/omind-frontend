/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { actions } from '@containers/UI/Nav';
import { MediaQueries, sizes } from '@utils/Styles';

const ContentStyled = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  &.bg-primary {
    li {
      &.disabled {
        &:before {
          color: #fff !important;
        }
      }
      a {
        color: #fff !important;
      }
    }
  }
`;

const MainNav = styled.ul`
  list-style-type: none;
  ${MediaQueries.xs`margin: 25% 0 0 0;`}
  ${MediaQueries.md`margin: 0;`}
  @media (max-width: ${sizes.md}px) and (orientation: landscape) {
      margin: 9% 0 0 0;
      li {
        margin-bottom: 0.4rem !important;
        &.title {
          font-size: 1.2rem;
        }
      }
  }

  padding: 0;
  li {
    margin-bottom: 1.5rem;
    font-weight: 700;
    &.disabled {
      position: relative;
      &:before {
        content: 'soon';
        position: absolute;
        transform: rotate(90deg);
        ${MediaQueries.xs`
        font-size: 0.8rem;
        top: 23px;
        left:-30px;`}
        ${MediaQueries.sm`
        font-size: 0.9rem;
        top: 28px;`}
        ${MediaQueries.md`
        font-size: 1rem;
        top: 33px;
        left: -35px;`}
        ${MediaQueries.lg`top: 25px;`}
      }
      opacity: 0.1;
      a {
        cursor: default;
      }
    }
    @media (max-width: 320px) {
      &.title {
        font-size: 1.5rem;
      }
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
    ${MediaQueries.xs`font-size: 1rem;`}
    ${MediaQueries.sm`font-size: 2rem;`}
    @media (max-width: ${sizes.md}px) and (orientation: landscape) {
      margin-bottom: 0.4rem;
      font-size: 0.8rem !important;
    }
    font-weight: 400;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      color: inherit;
    }
  }
`;
const Content = props => {
  const { isAuthenticated, close, color } = props;
  let className = 'bg-secondary';

  if (color === 'black') {
    className = 'bg-primary';
  }
  return (
    <ContentStyled className={className}>
      <Container>
        <Row className="vh-100">
          <Col xs={12} md={9} className="m-0 d-flex flex-column justify-content-center">
            <MainNav>
              <li className="title">
                <NavLink onClick={close} exact activeClassName="active" to="/">
                  About
                </NavLink>
                .
              </li>
              <li className="title">
                <NavLink onClick={close} activeClassName="active" to="/our-work">
                  Our Work
                </NavLink>
                .
              </li>
              <li className="title disabled">
                <NavLink onClick={close} activeClassName="active" to="#">
                  Products
                </NavLink>
                .
              </li>
              <li className="title">
                <NavLink onClick={close} activeClassName="active" to="/contact">
                  Let&apos;s Talk
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
          <Col xs={12} md={3} className="m-0 d-flex flex-column justify-content-center">
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
