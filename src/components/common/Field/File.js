import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const TextField = props => {
  const { name, label } = props;
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <Form.Control type="file" {...props} />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} component="span" />
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default TextField;
