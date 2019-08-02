import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

import { actions, validationSchema } from '@containers/Client/Update';
import { getOneAction } from '@containers/Client/GetOne';

import { StateErrorHandler } from '@utils/ErrorHandler';

import { Text, Checkbox, Textarea, File, Readonly } from '../Field';

class ClientProfileForm extends Component {
  componentDidMount() {
    const { fetch, clientId } = this.props;
    fetch({ id: clientId });
  }

  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      update,
      clientId,
      clientFetched,
      isFetchingData,
      isFetchingUpdate,
      updateError,
      fetchDataError,
      clientUpdated,
      isUpdated,
    } = this.props;

    if (fetchDataError) return <StateErrorHandler error={fetchDataError} />;

    return (
      <Formik
        initialValues={clientFetched}
        validationSchema={validationSchema}
        onSubmit={values => {
          update(Object.assign({}, values, { id: clientId }));
        }}
        enableReinitialize="true"
        render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {updateError && <StateErrorHandler error={updateError} />}

            <Alert show={isUpdated} key={0} variant="success">
              Profile updated successfully.
            </Alert>

            <Row>
              <Col xs={12} md={6}>
                <Readonly
                  label="Slug"
                  name="slug"
                  value={isUpdated ? clientUpdated.slug : clientFetched.slug}
                />

                <Text
                  label="Company Name *"
                  placeholder="Company Name"
                  name="companyName"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.companyName}
                  onChange={handleChange}
                  isInvalid={touched.companyName && errors.companyName}
                />

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
                  label="Cif"
                  placeholder="Cif"
                  name="cif"
                  type="text"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.cif}
                  onChange={handleChange}
                  isInvalid={touched.cif && errors.cif}
                />
                <File
                  label="Logo"
                  placeholder="Logo"
                  name="logoFile"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  onChange={event => {
                    setFieldValue('logoFile', event.currentTarget.files[0]);
                  }}
                  isInvalid={touched.logoFile && errors.logoFile}
                />
                {values.logo && (
                  <img width="150" alt="" src={`${process.env.API_URL_IMAGE}/${values.logo}`} />
                )}
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
                <Textarea
                  label="Description *"
                  placeholder="Description"
                  name="description"
                  autoComplete="off"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={touched.description && errors.description}
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
                <Checkbox
                  labeltext="Published"
                  label=""
                  placeholder=""
                  name="published"
                  disabled={isFetchingUpdate || isFetchingData}
                  value={values.published}
                  onChange={handleChange}
                  isInvalid={touched.published && errors.published}
                />
                <Readonly label="ID" name="id" value={clientFetched.id} />
                <Readonly label="Registration Date" name="id" value={clientFetched.createdDate} />
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

ClientProfileForm.propTypes = {
  clientId: PropTypes.string.isRequired,
  isFetchingUpdate: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { update, getOne } = state.client;
  const { isFetching, success, error } = update;

  return {
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    clientFetched: getOne.client,
    isFetchingUpdate: isFetching,
    isUpdated: success,
    clientUpdated: update.client,
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
)(ClientProfileForm);
