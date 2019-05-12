/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Contact</title>
        </Helmet>
        <h1>Contact</h1>
      </React.Fragment>
    );
  }
}

export default Contact;
