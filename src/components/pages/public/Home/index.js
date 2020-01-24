import React from 'react';
import { Helmet } from 'react-helmet';

import { Header, Footer, ButtonNav } from '@components/common';

import { AboutSection, HeaderSection } from './components';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Omind. Where you ideas evolve into products</title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="We are a brand which offers full-fledged Techno-creative multimedia products and services as per your needs and flexibility."
        />
      </Helmet>

      <Header.Public color="white" />

      <HeaderSection />

      <AboutSection />

      <ButtonNav exclude="about" />

      <Footer />
    </React.Fragment>
  );
};

export default Home;
