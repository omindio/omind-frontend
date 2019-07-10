import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const ProfileFormField = props => {
  const { name, placeholder } = props;
  const controlId = `profile_${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {placeholder}
      </Form.Label>
      <Col sm="7">
        <Form.Control {...props} />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} component="span" />
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default ProfileFormField;
