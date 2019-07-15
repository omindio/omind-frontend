import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/Employee/Update';
import { getOneAction } from '@containers/Employee/GetOne';

import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text } from '../Field';

class EmployeeProfileForm extends Component {
  componentDidMount() {
    const { fetch, employeeId } = this.props;
    fetch({ id: employeeId });
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      update,
      employeeId,
      employeeFetched,
      employeeUpdated,
      isFetchingData,
      isFetchingUpdate,
      updateError,
      fetchDataError,
      isUpdated,
    } = this.props;

    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

    const {
      workPosition,
      dni,
      fiscalAddress,
      phone,
      socialLinkedin,
      socialFacebook,
      socialInstagram,
      web,
    } = Object.assign({}, employeeFetched, employeeUpdated);

    const { name, lastName, email } = Object.assign({}, employeeFetched.user, employeeUpdated.user);

    return (
      <Formik
        initialValues={{
          name: name || '',
          lastName: lastName || '',
          email: email || '',
          password: '',
          passwordConfirmation: '',
          workPosition: workPosition || '',
          dni: dni || '',
          fiscalAddress: fiscalAddress || '',
          phone: phone || '',
          socialLinkedin: socialLinkedin || '',
          socialFacebook: socialFacebook || '',
          socialInstagram: socialInstagram || '',
          web: web || '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          update(Object.assign({}, values, { id: employeeId }));
        }}
        enableReinitialize="true"
        render={({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {updateError && <StateErrorHandler error={updateError} />}

            <Alert show={isUpdated} key={0} variant="success">
              Profile updated successfully.
            </Alert>

            <Row>
              <Col xs={12} md={6}>
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
                <Text
                  label="Phone"
                  placeholder="Phone"
                  name="phone"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && errors.phone}
                />
                <Text
                  label="Dni"
                  placeholder="Dni"
                  name="dni"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.dni}
                  onChange={handleChange}
                  isInvalid={touched.dni && errors.dni}
                />
              </Col>
              <Col xs={12} md={6}>
                <Text
                  label="Fiscal Address"
                  placeholder="Fiscal Address"
                  name="fiscalAddress"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.fiscalAddress}
                  onChange={handleChange}
                  isInvalid={touched.fiscalAddress && errors.fiscalAddress}
                  text="Format: C\ Rocafort 66 2-3 08014, Barcelona. España"
                />
                <Text
                  label="Work Position"
                  placeholder="Work Position"
                  name="workPosition"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.workPosition}
                  onChange={handleChange}
                  isInvalid={touched.workPosition && errors.workPosition}
                />

                <Text
                  label="Linkedin"
                  placeholder="Linkedin"
                  name="socialLinkedin"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.socialLinkedin}
                  onChange={handleChange}
                  isInvalid={touched.socialLinkedin && errors.socialLinkedin}
                  text="Format: https://linkedin.com"
                />

                <Text
                  label="Facebook"
                  placeholder="Facebook"
                  name="socialFacebook"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.socialFacebook}
                  onChange={handleChange}
                  isInvalid={touched.socialFacebook && errors.socialFacebook}
                />
                <Text
                  label="Instagram"
                  placeholder="Instagram"
                  name="socialInstagram"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.socialInstagram}
                  onChange={handleChange}
                  isInvalid={touched.socialInstagram && errors.socialInstagram}
                />
                <Text
                  label="Web"
                  placeholder="Web"
                  name="web"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.web}
                  onChange={handleChange}
                  isInvalid={touched.web && errors.web}
                />
              </Col>
            </Row>

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

EmployeeProfileForm.propTypes = {
  employeeId: PropTypes.string.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { update, getOne } = state.employee;
  const { employee, isFetching, success, error } = update;

  return {
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    employeeFetched: getOne.employee,
    employeeUpdated: employee,
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
)(EmployeeProfileForm);
