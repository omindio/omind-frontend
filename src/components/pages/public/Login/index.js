import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { StateErrorHandler } from '@utils/ErrorHandler';

import { loginAction, validationSchema } from '@containers/Auth/Login';

import { Form } from './components';

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
    const { error, dispatch } = this.props;
    return (
      <div>
        <Helmet>
          <title>Omind - Login</title>
        </Helmet>
        <h3>Login Page</h3>

        <StateErrorHandler error={error} />

        <Form dispatch={dispatch} loginAction={loginAction} validationSchema={validationSchema} />
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
  const { login } = state.auth;
  const { isAuthenticated, error } = login;
  return {
    isAuthenticated,
    error,
  };
};

export default connect(mapStateToProps)(Login);
