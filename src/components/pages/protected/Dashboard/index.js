import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@components/common';

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Dashboard. Omind</title>
        </Helmet>
        <Header.Protected />
      </React.Fragment>
    );
  }
}

export default Dashboard;
