import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/User/Update';
import { getOneAction } from '@containers/User/GetOne';
import { profileAction } from '@containers/User/Profile';

import { Loader } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

import Field from './Field';

class ProfileForm extends Component {
  componentDidMount() {
    const { fetch, userId, token } = this.props;
    fetch({ id: userId, token });
  }

  componentDidUpdate() {
    const { isUpdated, updateProfile, userUpdated } = this.props;
    if (isUpdated) {
      const { name, lastName, email } = userUpdated;

      updateProfile({ name, lastName, email });
    }
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      update,
      userId,
      token,
      userFetched,
      userUpdated,
      isFetchingData,
      isFetchingUpdate,
      updateError,
      fetchDataError,
      isUpdated,
    } = this.props;

    if (isFetchingUpdate || isFetchingData) return <Loader />;
    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

    const { name, lastName, email } = Object.assign({}, userFetched, userUpdated);

    return (
      <Formik
        initialValues={{
          name,
          lastName,
          email,
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          update(Object.assign({}, values, { id: userId, token }));
        }}
        render={({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {updateError && <StateErrorHandler error={updateError} />}
            <Alert show={isUpdated} key={0} variant="success">
              Profile updated successfully.
            </Alert>

            <Form.Row>
              <Field
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && errors.name}
                placeholder="Name"
              />
              <Field
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && errors.lastName}
                placeholder="Last Name"
              />
            </Form.Row>
            <Form.Row>
              <Field
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && errors.email}
                placeholder="Email"
              />
            </Form.Row>
            <Form.Row>
              <Field
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && errors.password}
                placeholder="Password"
              />
              <Field
                type="password"
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
                placeholder="Repeat Password"
              />
            </Form.Row>

            <Button className="btn-block text-left" type="submit">
              Save
            </Button>
          </Form>
        )}
      />
    );
  }
}

ProfileForm.propTypes = {
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { login } = state.auth;
  const { getOne, update } = state.user;

  return {
    userId: login.userId,
    token: login.token,
    userFetched: getOne.user,
    userUpdated: update.user,
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    isFetchingUpdate: update.isFetching,
    isUpdated: update.success,
    updateError: update.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getOneAction(values)),
    update: values => dispatch(actions.updateAction(values)),
    clear: () => dispatch(actions.clearAction()),
    updateProfile: values => dispatch(profileAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);
