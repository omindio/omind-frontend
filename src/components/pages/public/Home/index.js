/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';
import { Header, Footer, ButtonNav } from '@components/common';

import { AboutSection } from './components';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #0e1111;
`;
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind. Where you ideas evolve into products.</title>
        </Helmet>

        <Header.Public color="white" />

        <HeaderSection>
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1 className="text-secondary">
                  Where your ideas
                  <br />
                  <strong>
                    Evolve into
                    <br />
                    Products
                    <span className="text-white">.</span>
                  </strong>
                </h1>
              </Col>
            </Row>
          </Container>
        </HeaderSection>

        <AboutSection />

        <ButtonNav exclude="about" />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
