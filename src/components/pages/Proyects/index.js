/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './styles.scss';

class Proyects extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Omind - Proyects</title>
        </Helmet>
        <h1>Proyects</h1>
      </div>
    );
  }
}

export default Proyects;
