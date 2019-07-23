import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const SelectField = props => {
  const { name, label, options, onChange } = props;
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <Form.Control
          as="select"
          onChange={val => {
            onChange(name, val);
          }}
          {...props}
        >
          {options.length > 0 ? (
            options.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))
          ) : (
            <option>No results.</option>
          )}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} component="span" />
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default SelectField;
