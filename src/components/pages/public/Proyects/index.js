/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Proyects extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Proyects</title>
        </Helmet>
        <h1>Proyects</h1>
      </React.Fragment>
    );
  }
}

export default Proyects;
