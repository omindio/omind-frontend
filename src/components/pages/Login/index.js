import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './styles.scss';

import { authActions } from 'containers/Auth';

class Login extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  componentDidUpdate() {
    // check if errors
    this.checkAuth();
  }

  /*
  serverErrorHandler() {
    const { error } = this.props;

    if (error) {
      let errorMessage;
      switch (error.type) {
        case 'ValidationSchemaError':
          const errorMessageObject = JSON.parse(error.message);
          errorMessageObject.forEach(element => {
            errorMessage += <div>{element.message}</div>;
          });
          break;
        default:
          errorMessage = error.message;
          break;
      }

      return <div>{errorMessage}</div>;
    }
  }
  */

  onHandleLogin = event => {
    const { dispatch } = this.props;

    event.preventDefault();

    const { email } = event.target;
    const { password } = event.target;

    const creds = {
      email: email.value.trim(),
      password: password.value.trim(),
    };

    dispatch(authActions.loginAction(creds));
  };

  checkAuth() {
    const { isAuthenticated, history } = this.props;
    // check is user is authenticated and push to profile
    if (isAuthenticated) {
      history.push('/profile');
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Omind - Login</title>
        </Helmet>
        <h3>Login Page</h3>
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">
              Email
              <input id="email" type="text" name="email" />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input id="password" type="password" name="password" />
            </label>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
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

function mapStateToProps(state) {
  const { authReducer } = state;
  const { isAuthenticated, error } = authReducer;
  return {
    isAuthenticated,
    error,
  };
}

export default connect(mapStateToProps)(Login);
