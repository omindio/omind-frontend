import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Loader } from '@components/common';
import { Form as BootstrapForm, Button } from 'react-bootstrap';

const Form = props => {
  const { initialValues, dispatch, userId, token, actions, validationSchema, loading } = props;
  if (loading) {
    return <Loader />;
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(actions.updateAction(Object.assign({}, values, { id: userId, token })));
      }}
      render={({ values, handleSubmit, handleChange, errors, touched }) => (
        <BootstrapForm noValidate onSubmit={handleSubmit}>
          <BootstrapForm.Row>
            <BootstrapForm.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isValid={touched.name && !errors.name}
              isInvalid={touched.name && errors.name}
              placeholder="name"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              <ErrorMessage name="name" component="span" />
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Row>
          <BootstrapForm.Row>
            <BootstrapForm.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={touched.lastName && errors.lastName}
              placeholder="last name"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              <ErrorMessage name="lastName" component="span" />
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Row>
          <BootstrapForm.Row>
            <BootstrapForm.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && errors.email}
              placeholder="email"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              <ErrorMessage name="email" component="span" />
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Row>
          <BootstrapForm.Row>
            <BootstrapForm.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              isValid={touched.password && !errors.password}
              isInvalid={touched.password && errors.password}
              placeholder="password"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              <ErrorMessage name="password" component="span" />
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Row>
          <BootstrapForm.Row>
            <BootstrapForm.Control
              type="password"
              name="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={handleChange}
              isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
              isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
              placeholder="Repeat password"
            />
            <BootstrapForm.Control.Feedback type="invalid">
              <ErrorMessage name="passwordConfirmation" component="span" />
            </BootstrapForm.Control.Feedback>
          </BootstrapForm.Row>
          <Button type="submit">Save</Button>
        </BootstrapForm>
      )}
    />
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default Form;
