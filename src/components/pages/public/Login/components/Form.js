import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Form as FormikForm, Field } from 'formik';

const Form = props => {
  const { dispatch, loginAction, validationSchema } = props;
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(loginAction(values));
      }}
      render={values => (
        <FormikForm>
          <div>
            <Field value={values.email} placeholder="email" type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <Field value={values.password} placeholder="password" type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Sign in</button>
        </FormikForm>
      )}
    />
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Form;
