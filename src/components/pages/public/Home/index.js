/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';
import { Header, Footer } from '@components/common';

import { ServiceCard, services, ValueCard, values } from './components';

const AboutSection = styled.section`
  padding-top: 200px;
  h1,
  h2 {
    margin-bottom: 80px;
    font-weight: 700;
  }
  .container {
    > .row {
      margin-bottom: 100px;
    }
  }
`;

const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  > div {
    margin-bottom: 25px;
  }
  &.services__container {
    > div {
      &:nth-child(odd) {
        margin-right: 25px;
      }
    }
  }
  &.values__container {
    > div {
      margin-right: 25px !important;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Home</title>
        </Helmet>

        <Header.Public color="white" />

        <section className="bg-primary">
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
        </section>

        <AboutSection>
          <Container>
            <Row>
              <Col>
                <h1 className="text-primary">About.</h1>
                <p>
                  We are a full service multimedia & technology brand, and we’re ready to provide
                  you with
                  <br />
                  everything you need, in terms of creativity.
                </p>
                <p>
                  <strong>
                    We do it in the most effective way so that you can reach all your audience.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="text-primary">Thinks we do well.</h2>
                <CardContainer className="services__container">
                  {services.map(item => (
                    <ServiceCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </CardContainer>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="text-primary">Our core values.</h2>
                <CardContainer className="values__container">
                  {values.map(item => (
                    <ValueCard key={item.name} name={item.name} />
                  ))}
                </CardContainer>
              </Col>
            </Row>
          </Container>
        </AboutSection>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
