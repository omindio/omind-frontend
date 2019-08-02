import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/Client/Create';
import { Field } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

class AddForm extends Component {
  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { create, hasError, isFetching, isCreated, client } = this.props;

    return (
      <Formik
        initialValues={client}
        validationSchema={validationSchema}
        onSubmit={values => {
          create(values);
        }}
        render={({ values, handleSubmit, handleChange, errors, touched, setFieldValue }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {hasError && <StateErrorHandler error={hasError} />}

            <Alert show={isCreated} key={0} variant="success">
              Client added successfully.
              <br />
              Verifcation token:&nbsp;
              {client.verificationToken}
              <br />
              <LinkContainer to={`/clients/edit/${client.id}`}>
                <Button variant="primary" size="sm">
                  view profile
                </Button>
              </LinkContainer>
            </Alert>

            <Row>
              <Col xs={12} md={6}>
                <Field.Text
                  label="Company Name *"
                  placeholder="Company Name"
                  name="companyName"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.companyName}
                  onChange={handleChange}
                  isInvalid={touched.companyName && errors.companyName}
                />

                <Field.Text
                  label="Name *"
                  placeholder="Name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />

                <Field.Text
                  label="Last Name *"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={touched.lastName && errors.lastName}
                />

                <Field.Text
                  label="Email *"
                  placeholder="Email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />

                <Field.Text
                  label="Password *"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && errors.password}
                />

                <Field.Text
                  label="Repeat Password *"
                  placeholder="Repeat Password"
                  name="passwordConfirmation"
                  type="password"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
                />
                <Field.Text
                  label="Phone"
                  placeholder="Phone"
                  name="phone"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && errors.phone}
                />
                <Field.Text
                  label="Cif"
                  placeholder="Cif"
                  name="cif"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.cif}
                  onChange={handleChange}
                  isInvalid={touched.cif && errors.cif}
                />
                <Field.File
                  label="Logo"
                  placeholder="Logo"
                  name="logoFile"
                  autoComplete="off"
                  disabled={isFetching}
                  onChange={event => {
                    setFieldValue('logoFile', event.currentTarget.files[0]);
                  }}
                  isInvalid={touched.logoFile && errors.logoFile}
                />
              </Col>
              <Col xs={12} md={6}>
                <Field.Text
                  label="Fiscal Address"
                  placeholder="Fiscal Address"
                  name="fiscalAddress"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.fiscalAddress}
                  onChange={handleChange}
                  isInvalid={touched.fiscalAddress && errors.fiscalAddress}
                  text="Format: C\ Rocafort 66 2-3 08014, Barcelona. España"
                />
                <Field.Textarea
                  label="Description *"
                  placeholder="Description"
                  name="description"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={touched.description && errors.description}
                />

                <Field.Text
                  label="Linkedin"
                  placeholder="Linkedin"
                  name="socialLinkedin"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.socialLinkedin}
                  onChange={handleChange}
                  isInvalid={touched.socialLinkedin && errors.socialLinkedin}
                  text="Format: https://linkedin.com"
                />

                <Field.Text
                  label="Facebook"
                  placeholder="Facebook"
                  name="socialFacebook"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.socialFacebook}
                  onChange={handleChange}
                  isInvalid={touched.socialFacebook && errors.socialFacebook}
                />
                <Field.Text
                  label="Instagram"
                  placeholder="Instagram"
                  name="socialInstagram"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.socialInstagram}
                  onChange={handleChange}
                  isInvalid={touched.socialInstagram && errors.socialInstagram}
                />
                <Field.Text
                  label="Web"
                  placeholder="Web"
                  name="web"
                  type="text"
                  autoComplete="off"
                  disabled={isFetching}
                  value={values.web}
                  onChange={handleChange}
                  isInvalid={touched.web && errors.web}
                />
                <Field.Checkbox
                  labeltext="Published"
                  label=""
                  placeholder=""
                  name="published"
                  disabled={isFetching}
                  value={values.published}
                  onChange={handleChange}
                  isInvalid={touched.published && errors.published}
                />
              </Col>
            </Row>

            <Row>
              <Col className="text-right">
                <Button disabled={isFetching} className="btn text-left" type="submit">
                  {isFetching ? 'Wait...' : 'Save'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const { create } = state.client;
  const { isFetching, success, error } = create;

  return {
    isFetching,
    isCreated: success,
    hasError: error,
    client: create.client,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: values => dispatch(actions.createAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddForm);
