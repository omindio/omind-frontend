/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { loginAction, validationSchema } from '@containers/Auth/Login';
import { Header } from '@components/common';

import { Form } from './components';

const H1 = styled.h1`
  margin-bottom: 2.3rem;
  font-weight: 700;
`;

class Login extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  componentDidUpdate() {
    // check if errors
    this.checkAuth();
  }

  checkAuth() {
    const { isAuthenticated, history } = this.props;
    // check is user is authenticated and push to profile
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }

  render() {
    const { error, dispatch, isFetching } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Login</title>
        </Helmet>
        <Header.Public color="black" />

        <section className="bg-white login">
          <Container className="h-100 w-100">
            <Row className="h-100">
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <H1 className="text-primary">Welcome.</H1>

                <Row>
                  <Col xs={6}>
                    <Form
                      error={error}
                      loading={isFetching}
                      dispatch={dispatch}
                      loginAction={loginAction}
                      validationSchema={validationSchema}
                    />
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
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { isAuthenticated, error, isFetching } = login;
  return {
    isAuthenticated,
    isFetching,
    error,
  };
};

export default connect(mapStateToProps)(Login);
