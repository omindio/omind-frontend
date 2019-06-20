import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/User/Update';
import { getOneAction } from '@containers/User/GetOne';

import { StateErrorHandler } from '@utils/ErrorHandler';

import Field from './Field';

class ProfileForm extends Component {
  componentDidMount() {
    const { fetch, userId } = this.props;
    fetch({ id: userId });
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      update,
      userId,
      userFetched,
      userUpdated,
      isFetchingData,
      isFetchingUpdate,
      updateError,
      fetchDataError,
      isUpdated,
    } = this.props;

    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

    const { name, lastName, email } = Object.assign({}, userFetched, userUpdated);

    return (
      <Formik
        initialValues={{
          name: name || '',
          lastName: lastName || '',
          email: email || '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          update(Object.assign({}, values, { id: userId }));
        }}
        enableReinitialize="true"
        render={({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {updateError && <StateErrorHandler error={updateError} />}
            <Alert show={isUpdated} key={0} variant="success">
              Profile updated successfully.
            </Alert>

            <Form.Row>
              <Field
                autoComplete="off"
                type="text"
                name="name"
                disabled={isFetchingUpdate || isFetchingData}
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && errors.name}
                placeholder="Name"
              />
              <Field
                autoComplete="off"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                disabled={isFetchingUpdate || isFetchingData}
                isInvalid={touched.lastName && errors.lastName}
                placeholder="Last Name"
              />
            </Form.Row>
            <Form.Row>
              <Field
                autoComplete="off"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                disabled={isFetchingUpdate || isFetchingData}
                isInvalid={touched.email && errors.email}
                placeholder="Email"
              />
            </Form.Row>
            <Form.Row>
              <Field
                autoComplete="off"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                disabled={isFetchingUpdate || isFetchingData}
                isInvalid={touched.password && errors.password}
                placeholder="Password"
              />
              <Field
                autoComplete="off"
                type="password"
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChange={handleChange}
                disabled={isFetchingUpdate || isFetchingData}
                isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
                placeholder="Repeat Password"
              />
            </Form.Row>

            <Button
              disabled={isFetchingUpdate || isFetchingData}
              className="btn text-left"
              type="submit"
            >
              {isFetchingUpdate || isFetchingData ? 'Wait...' : 'Save'}
            </Button>
          </Form>
        )}
      />
    );
  }
}

ProfileForm.propTypes = {
  userId: PropTypes.string.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { update } = state.user;
  const { user, isFetching, success, error } = update;

  return {
    userUpdated: user,
    isFetchingUpdate: isFetching,
    isUpdated: success,
    updateError: error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getOneAction(values)),
    update: values => dispatch(actions.updateAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileForm);
