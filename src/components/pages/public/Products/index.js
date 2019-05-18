/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Products</title>
        </Helmet>
        <h1>Products</h1>
      </React.Fragment>
    );
  }
}

export default Products;
