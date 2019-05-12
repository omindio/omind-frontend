import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import { Loader } from '@components/common';
/*
import styled from 'styled-components';

const Input = styled(BootstrapForm.Control)`
  text-transform: capitalize;
  border: 3px solid #1f1e1d;
  background: transparent;
  padding: 1.7rem 1.5rem;
  color: #6c6c6c;
`;
*/

const Form = props => {
  const { dispatch, loginAction, validationSchema, loading } = props;
  if (loading) {
    return <Loader />;
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(loginAction(values));
      }}
      render={({ values, handleSubmit, handleChange, touched, errors }) => (
        <BootstrapForm noValidate onSubmit={handleSubmit}>
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
          <Button type="submit">Sign in</Button>
        </BootstrapForm>
      )}
    />
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Form;
