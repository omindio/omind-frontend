/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { loginAction, validationSchema } from '@containers/Auth/Login';
import { profileAction } from '@containers/User/Profile';
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

  componentDidUpdate() {
    const {
      isAuthenticated,
      history,
      userName,
      userLastName,
      userEmail,
      updateProfile,
    } = this.props;
    // check is user is authenticated and push to profile
    if (isAuthenticated) {
      updateProfile({ name: userName, lastName: userLastName, email: userEmail });
      history.push('/dashboard');
    }
  }

  render() {
    const { error, login, isFetching } = this.props;
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
                    <Form
                      error={error}
                      isFetching={isFetching}
                      login={login}
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
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { isAuthenticated, error, isFetching, userName, userLastName, userEmail } = login;
  return {
    userName,
    userLastName,
    userEmail,
    isAuthenticated,
    isFetching,
    error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: values => dispatch(loginAction(values)),
    updateProfile: values => dispatch(profileAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
