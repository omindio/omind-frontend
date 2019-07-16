import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/User/Create';
import { Field } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

// import Field from './Field';

class AddForm extends Component {
  componentWillUnmount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { create, hasError, isFetching, isCreated, user } = this.props;
    return (
      <Formik
        initialValues={user}
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
              {user.verificationToken}
              <br />
              <LinkContainer to={`/users/edit/${user.id}`}>
                <Button variant="primary" size="sm">
                  view profile
                </Button>
              </LinkContainer>
            </Alert>

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
    user: create.user,
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
