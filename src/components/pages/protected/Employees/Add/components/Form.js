import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/User/Create';

import { StateErrorHandler } from '@utils/ErrorHandler';

import Field from './Field';

class AddForm extends Component {
  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { create, hasError, isFetching, isCreated, verificationToken, id } = this.props;

    return (
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          create(values);
        }}
        render={({ values, handleSubmit, handleChange, errors, touched }) => (
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {hasError && <StateErrorHandler error={hasError} />}

            <Alert show={isCreated} key={0} variant="success">
              User added successfully.
              <br />
              Verifcation token:&nbsp;
              {verificationToken}
              <br />
              <LinkContainer to={`/users/edit/${id}`}>
                <Button variant="primary" size="sm">
                  view profile
                </Button>
              </LinkContainer>
            </Alert>

            <Field
              autoComplete="off"
              type="text"
              name="name"
              disabled={isFetching}
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
              disabled={isFetching}
              isInvalid={touched.lastName && errors.lastName}
              placeholder="Last Name"
            />
            <Field
              autoComplete="off"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              disabled={isFetching}
              isInvalid={touched.email && errors.email}
              placeholder="Email"
            />
            <Field
              autoComplete="off"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              disabled={isFetching}
              isInvalid={touched.password && errors.password}
              placeholder="Password"
            />
            <Field
              autoComplete="off"
              type="password"
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              disabled={isFetching}
              isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
              placeholder="Repeat Password"
            />

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
  const { create } = state.user;
  const { isFetching, success, error } = create;

  return {
    isFetching,
    isCreated: success,
    hasError: error,
    verificationToken: create.user.verificationToken,
    id: create.user.id,
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
