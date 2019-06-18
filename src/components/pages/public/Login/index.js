/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header } from '@components/common';

import { Form } from './components';

const H1 = styled.h1`
  margin-bottom: 2.3rem;
  font-weight: 700;
`;

class Login extends Component {
  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    // check is user is authenticated and push to profile
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }

  render() {
    const { history } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Login</title>
        </Helmet>
        <Header.Public color="black" />

        <section className="bg-white login">
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <H1 className="text-primary">Welcome.</H1>

                <Row>
                  <Col xs={12} sm={7} md={6}>
                    <Form history={history} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { isAuthenticated } = login;
  return {
    isAuthenticated,
  };
};

export default connect(mapStateToProps)(Login);
