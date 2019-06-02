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
  const { login, validationSchema, isFetching, error } = props;
  if (isFetching) return <Loader />;

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        login(values);
      }}
      render={({ values, handleSubmit, handleChange, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <StateErrorHandler error={error} />

          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
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
  login: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoginForm;
