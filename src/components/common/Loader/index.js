import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <Spinner className="ml-auto" animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
