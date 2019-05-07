import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage, Form as FormikForm, Field } from 'formik';

const Form = props => {
  const { initialValues, dispatch, userId, token, actions, validationSchema } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        dispatch(actions.updateAction(Object.assign({}, values, { id: userId, token })));
      }}
      render={values => (
        <FormikForm>
          <div>
            <Field placeholder="name" type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <Field placeholder="last name" type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />
          </div>
          <div>
            <Field placeholder="email" type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <Field value={values.password} placeholder="password" type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </div>
          <div>
            <Field
              value={values.passwordConfirmation}
              placeholder="repeat password"
              type="password"
              name="passwordConfirmation"
            />
            <ErrorMessage name="passwordConfirmation" component="span" />
          </div>
          <button type="submit">Save</button>
        </FormikForm>
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
