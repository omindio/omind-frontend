import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/User/Update';
import { getOneAction } from '@containers/User/GetOne';

import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text } from '../Field';

class UserProfileForm extends Component {
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

            <Text
              label="Name *"
              placeholder="Name"
              name="name"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.name}
              onChange={handleChange}
              isInvalid={touched.name && errors.name}
            />

            <Text
              label="Last Name *"
              placeholder="Last Name"
              name="lastName"
              type="text"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.lastName}
              onChange={handleChange}
              isInvalid={touched.lastName && errors.lastName}
            />

            <Text
              label="Email *"
              placeholder="Email"
              name="email"
              type="email"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && errors.email}
            />

            <Text
              label="Password *"
              placeholder="Password"
              name="password"
              type="password"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.password}
              onChange={handleChange}
              isInvalid={touched.password && errors.password}
            />

            <Text
              label="Repeat Password *"
              placeholder="Repeat Password"
              name="passwordConfirmation"
              type="password"
              autoComplete="off"
              disabled={isFetchingUpdate || isFetchingData}
              value={values.passwordConfirmation}
              onChange={handleChange}
              isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
            />

            <Row>
              <Col className="text-right">
                <Button
                  disabled={isFetchingUpdate || isFetchingData}
                  className="btn text-left"
                  type="submit"
                >
                  {isFetchingUpdate || isFetchingData ? 'Wait...' : 'Save'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      />
    );
  }
}

UserProfileForm.propTypes = {
  userId: PropTypes.string.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { update, getOne } = state.user;
  const { user, isFetching, success, error } = update;

  return {
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    userFetched: getOne.user,
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
)(UserProfileForm);
