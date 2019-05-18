import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/User/Update';
import { Loader } from '@components/common';
import { getOneAction } from '@containers/User/GetOne';
import { StateErrorHandler } from '@utils/ErrorHandler';

import Field from './Field';

class ProfileForm extends Component {
  componentDidMount() {
    const { dispatch, userId, token } = this.props;
    dispatch(getOneAction({ id: userId, token }));
  }

  render() {
    const {
      dispatch,
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

    const { name, lastName, email } = userFetched;

    console.log(Object.assign({}, userFetched, userUpdated));

    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

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
          dispatch(actions.updateAction(Object.assign({}, values, { id: userId, token })));
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
  dispatch: PropTypes.func.isRequired,
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
export default connect(mapStateToProps)(ProfileForm);
