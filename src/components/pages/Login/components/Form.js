import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Form, Button as ButtonBootsrap } from 'react-bootstrap';
import { Loader } from '@components/common';
import { StateErrorHandler } from '@utils/ErrorHandler';

import styled from 'styled-components';

const Button = styled(ButtonBootsrap)`
  margin-top: 2.5rem;
  text-align: left;
  width: 100%;
`;

const LoginForm = props => {
  const { dispatch, loginAction, validationSchema, loading, error } = props;
  if (loading) return <Loader />;
  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(loginAction(values));
      }}
      render={({ values, handleSubmit, handleChange, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <StateErrorHandler error={error} />

          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            isInvalid={touched.email && errors.email}
            placeholder="email"
          />
          <Form.Control.Feedback type="invalid">
            <ErrorMessage name="email" component="span" />
          </Form.Control.Feedback>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password}
            placeholder="password"
          />
          <Form.Control.Feedback type="invalid">
            <ErrorMessage name="password" component="span" />
          </Form.Control.Feedback>
          <Button type="submit">Sign in</Button>
        </Form>
      )}
    />
  );
};

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default LoginForm;
