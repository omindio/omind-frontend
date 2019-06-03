import React from 'react';

import { Form, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const Field = props => {
  const { name, placeholder } = props;
  const controlId = `profile_${name}`;
  return (
    <Form.Group xs={12} sm as={Col} controlId={controlId}>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control {...props} />
      <Form.Control.Feedback type="invalid">
        <ErrorMessage name={name} component="span" />
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Field;
