import React from 'react';

import AppRoute from '@routes';
import { Header, Footer } from '@components/common';

import './styles.scss';

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <AppRoute />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
