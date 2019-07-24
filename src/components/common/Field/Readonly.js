import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';

const TextField = props => {
  const { name, label } = props;
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <Form.Control readOnly plaintext {...props} />
      </Col>
    </Form.Group>
  );
};

export default TextField;
