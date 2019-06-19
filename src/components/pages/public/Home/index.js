/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Header, Footer, ButtonNav } from '@components/common';

import { AboutSection, HeaderSection } from './components';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind. Where you ideas evolve into products.</title>
        </Helmet>

        <Header.Public color="white" />

        <HeaderSection />

        <AboutSection />

        <ButtonNav exclude="about" />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
