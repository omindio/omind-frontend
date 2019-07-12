import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const Checkbox = props => {
  const { name, labeltext, value } = props;
  const controlId = `${name}`;

  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {labeltext}
      </Form.Label>
      <Col sm="7">
        <Form.Check checked={value} type="checkbox" {...props} />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} component="span" />
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default Checkbox;
