/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Row, Col } from 'react-bootstrap';
import { Header, Footer, ButtonNav, OverlayCard } from '@components/common';
import { MediaQueries } from '@utils/Styles';

import nomadcoworkImg from './images/nomadcowork.jpg';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #fff;
`;

const HeaderContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${MediaQueries.xs`max-width: 100%; padding: 0 2.2rem;`}
  ${MediaQueries.sm`max-width: 100%;`}
  ${MediaQueries.md`max-width: 600px; padding: 0;`}
  ${MediaQueries.lg`max-width: 750px;`}
  ${MediaQueries.xl`max-width: 900px;`}
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }
`;
class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Products. Omind</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection>
          <HeaderContainer>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1>
                  We believe there is only a good reason to start a company:
                  <strong> It&apos;s to change the world.</strong>
                </h1>
              </Col>
            </Row>
          </HeaderContainer>
        </HeaderSection>
        <section>
          <CardsContainer>
            <OverlayCard
              image={nomadcoworkImg}
              to="/products/nomad-cowork"
              title="Nomad Cowork"
              alt=""
            />
            <OverlayCard image={nomadcoworkImg} to="/product/coestate" title="Coestate" alt="" />
          </CardsContainer>
        </section>
        <ButtonNav exclude="products" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Products;
