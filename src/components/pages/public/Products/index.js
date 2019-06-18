/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';
import { Header, Footer } from '@components/common';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #fffa94;
`;

class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Products</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection>
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1>
                  Making ideas
                  <br />
                  <strong> Happen:</strong>
                </h1>
              </Col>
            </Row>
          </Container>
        </HeaderSection>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Products;
