import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import './styles.scss';

import { authActions } from '@containers/Auth';

class Login extends Component {
    componentDidMount () {
        this.checkAuth();
    }

    componentDidUpdate () {
    //check if errors
        this.checkAuth();
    }

    checkAuth () {
        const { isAuthenticated, history } = this.props;
        //check is user is authenticated and push to profile
        if (isAuthenticated) {
            history.push('/profile');
        }
    }

    serverErrorHandler () {
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

  onHandleLogin = event => {
      event.preventDefault();

      const email = event.target.email;
      const password = event.target.password;

      const creds = {
          email: email.value.trim(),
          password: password.value.trim()
      };

      this.props.dispatch(authActions.loginAction(creds));
  };

  render () {
      return (
          <div>
              <Helmet>
                  <title>Omind - Login</title>
              </Helmet>
              <h3>Login Page</h3>
              <form onSubmit={this.onHandleLogin}>
                  <div>
                      <label>Email</label>
                      <input type="text" name="email" />
                  </div>
                  <div>
                      <label>Password</label>
                      <input type="password" name="password" />
                  </div>
                  <div>
                      <button type="submit">Login</button>
                  </div>
              </form>

              {this.errorHandler()}
          </div>
      );
  }
}

function mapStateToProps (state) {
    const { authReducer } = state;
    const { isAuthenticated, error } = authReducer;
    return {
        isAuthenticated,
        error
    };
}

export default connect(mapStateToProps)(Login);
