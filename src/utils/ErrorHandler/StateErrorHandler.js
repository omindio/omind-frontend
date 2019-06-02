/* eslint-disable guard-for-in */
import React from 'react';
import { Alert } from 'react-bootstrap';

const build = error => {
  const errorMessage = [];
  if (error && typeof error === 'object') {
    if (
      Object.prototype.hasOwnProperty.call(error, 'message') &&
      typeof error.message !== 'undefined'
    ) {
      switch (error.constructor.name) {
        case 'ValidationSchemaError':
          // eslint-disable-next-line no-case-declarations
          const errors = JSON.parse(error.message);
          for (const key in errors) {
            const obj = errors[key];
            for (const prop in obj) {
              const keyList = `${key}_${prop}`;
              errorMessage.push(
                <Alert key={keyList} variant="danger">
                  {obj[prop]}
                </Alert>,
              );
            }
          }
          break;
        default:
          errorMessage.push(
            <Alert key={0} variant="danger">
              {error.message}
            </Alert>,
          );
          break;
      }
    }
  }
  return errorMessage;
};

const StateErrorHandler = props => {
  const { error } = props;
  const errorMessage = build(error);

  return <div>{errorMessage}</div>;
};

export default StateErrorHandler;
