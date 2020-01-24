import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Form, Button as ButtonBootsrap } from 'react-bootstrap';
import { connect } from 'react-redux';

import { StateErrorHandler } from '@utils/ErrorHandler';
import { loginAction, validationSchema } from '@containers/Auth/Login';
import { profileAction } from '@containers/Auth/Profile';

import styled from 'styled-components';

const Button = styled(ButtonBootsrap)`
  margin-top: 2.5rem;
  text-align: left;
  width: 100%;
  padding: 0.7rem 0.6rem;
  border-radius: 3px;
  height: auto !important;
`;

class LoginForm extends Component {
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
    const { login, isFetching, error } = this.props;

    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          login(values);
        }}
        render={({ values, handleSubmit, handleChange, touched, errors }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <StateErrorHandler error={error} />

            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && errors.email}
              placeholder="email"
              disabled={isFetching}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              <ErrorMessage name="email" component="span" />
            </Form.Control.Feedback>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
              placeholder="password"
              disabled={isFetching}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              <ErrorMessage name="password" component="span" />
            </Form.Control.Feedback>
            <Button disabled={isFetching} type="submit">
              {isFetching ? 'Wait...' : 'Sign In'}
            </Button>
          </Form>
        )}
      />
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
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
)(LoginForm);
