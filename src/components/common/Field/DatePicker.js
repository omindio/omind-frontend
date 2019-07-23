import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateField = ({ name, label, value, onChange, placeholder, isInvalid, disabled }) => {
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <DatePicker
          disabled={disabled}
          placeholderText={placeholder}
          name={name}
          selected={(value && new Date(value)) || null}
          dateFormat="dd-MM-yyyy"
          className={`form-control ${isInvalid && 'is-invalid'}`}
          onChange={val => {
            onChange(name, val);
          }}
        />
        {isInvalid && (
          <div style={{ display: 'block' }} className="invalid-feedback">
            <span>{isInvalid}</span>
          </div>
        )}
      </Col>
    </Form.Group>
  );
};

export default DateField;
