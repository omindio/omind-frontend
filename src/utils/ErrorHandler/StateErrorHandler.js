/* eslint-disable guard-for-in */
import React from 'react';

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
              errorMessage.push(<li key={keyList}>{obj[prop]}</li>);
            }
          }
          break;
        default:
          errorMessage.push(<li key={0}>{error.message}</li>);
          break;
      }
    }
  }
  return errorMessage;
};

const StateErrorHandler = props => {
  const { error } = props;
  const errorMessage = build(error);

  return (
    <div>
      <ul>{errorMessage}</ul>
    </div>
  );
};

export default StateErrorHandler;
