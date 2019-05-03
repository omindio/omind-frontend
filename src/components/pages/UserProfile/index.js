/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Formik, ErrorMessage, Form, Field } from 'formik';

import { userProfileActions, userProfileSchema } from '@containers/UserProfile';
import { Loader } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

import './styles.scss';

class UserProfile extends Component {
  componentDidMount() {
    const { dispatch, userId, token } = this.props;
    dispatch(userProfileActions.loadDataAction({ id: userId, token }));
  }

  render() {
    const { user, isFetching, error } = this.props;

    if (isFetching || !user) return <Loader />;

    const { name, lastName, email } = user;

    return (
      <div>
        <Helmet>
          <title>Omind - Profile</title>
        </Helmet>
        <h3>Profile</h3>

        <StateErrorHandler error={error} />

        <Formik
          initialValues={{
            name,
            lastName,
            email,
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={userProfileSchema}
          onSubmit={values => {
            const { dispatch, userId, token } = this.props;
            dispatch(
              userProfileActions.updateUserProfileAction(
                Object.assign({}, values, { id: userId, token }),
              ),
            );
          }}
          render={values => (
            <Form>
              <div>
                <Field placeholder="name" type="text" name="name" />
                <ErrorMessage name="name" component="span" />
              </div>
              <div>
                <Field placeholder="last name" type="text" name="lastName" />
                <ErrorMessage name="lastName" component="span" />
              </div>
              <div>
                <Field placeholder="email" type="email" name="email" />
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
              <div>
                <Field
                  value={values.passwordConfirmation}
                  placeholder="repeat password"
                  type="password"
                  name="passwordConfirmation"
                />
                <ErrorMessage name="passwordConfirmation" component="span" />
              </div>
              <button type="submit">Save</button>
            </Form>
          )}
        />
      </div>
    );
  }
}

UserProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  const { authReducer, userProfileReducer } = state;
  const { userId, token } = authReducer;
  const { user, isFetching, error } = userProfileReducer;
  return {
    userId,
    token,
    user,
    isFetching,
    error,
  };
};

export default connect(mapStateToProps)(UserProfile);
