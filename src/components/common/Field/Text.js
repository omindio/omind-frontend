import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const TextField = props => {
  const { name, label, text } = props;
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <Form.Control {...props} />
        {text && (
          <Form.Text className="text-muted">
            {text}
          </Form.Text>
        )}
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} component="span" />
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default TextField;
