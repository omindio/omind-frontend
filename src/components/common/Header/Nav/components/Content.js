/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
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
    a {
      color: #0e1111;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
    .active {
      color: #fff;
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
  }
`;
class Content extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;

    dispatch(actions.closeAction());
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <ContentStyled className="bg-secondary">
        <Container className="h-100 w-100">
          <Row className="h-100">
            <Col xs={9} className="m-0 vh-100 d-flex flex-column justify-content-center">
              <MainNav>
                <li className="title">
                  <NavLink onClick={this.handleClick} exact activeClassName="active" to="/">
                    About
                  </NavLink>
                  .
                </li>
                <li className="title">
                  <NavLink onClick={this.handleClick} activeClassName="active" to="/proyects">
                    Our Work
                  </NavLink>
                  .
                </li>
                <li className="title">
                  <NavLink onClick={this.handleClick} activeClassName="active" to="/contact">
                    Lets Talk
                  </NavLink>
                  .
                </li>
                {!isAuthenticated && (
                  <li className="title">
                    <NavLink onClick={this.handleClick} activeClassName="active" to="/login">
                      Sign in
                    </NavLink>
                    .
                  </li>
                )}
              </MainNav>
            </Col>
            <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
              <SocialMediaNav>
                <li>Linkedin.</li>
                <li>Instagram.</li>
                <li>Facebook.</li>
              </SocialMediaNav>
            </Col>
          </Row>
        </Container>
      </ContentStyled>
    );
  }
}

export default Content;
