import React from 'react';
import { connect } from 'react-redux';

import { Header, Footer, ButtonNav } from '@components/common';
import NotFound from '@components/pages/public/NotFound';

import { Product } from './components';

const InfoPage = ({ match, error }) => {
  const { slug } = match.params;

  if (error) return <NotFound />;

  return (
    <React.Fragment>
      <Header.Public color="black" />

      <Product slug={slug} />

      <ButtonNav />
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { getPublicOne } = state.project;
  const { error } = getPublicOne;

  return {
    error,
  };
};

export default connect(mapStateToProps)(InfoPage);
