import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Form, Field } from 'formik';

import { authActions, loginSchema } from '@containers/Auth';
import { StateErrorHandler } from '@utils/ErrorHandler';

import './styles.scss';

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
      history.push('/profile');
    }
  }

  render() {
    const { error } = this.props;

    return (
      <div>
        <Helmet>
          <title>Omind - Login</title>
        </Helmet>
        <h3>Login Page</h3>

        <StateErrorHandler error={error} />

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={values => {
            const { dispatch } = this.props;
            dispatch(authActions.loginAction(values));
          }}
          render={values => (
            <Form>
              <div>
                <Field value={values.email} placeholder="email" type="email" name="email" />
                <ErrorMessage name="email" component="span" />
              </div>
              <div>
                <Field
                  value={values.password}
                  placeholder="password"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" component="span" />
              </div>
              <button type="submit">Sign in</button>
            </Form>
          )}
        />
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { authReducer } = state;
  const { isAuthenticated, error } = authReducer;
  return {
    isAuthenticated,
    error,
  };
};

export default connect(mapStateToProps)(Login);
