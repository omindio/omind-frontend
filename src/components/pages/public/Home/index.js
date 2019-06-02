/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';
import { Header, Footer } from '@components/common';
import { MediaQueries } from '@utils/Styles';

import { ServiceCard, services, ValueCard, values } from './components';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #0e1111;
`;
/*
  TODO: Responsive de los textos y margenes.
*/

const AboutSection = styled.section`

  ${MediaQueries.xs`padding-top: 90px;`}
  ${MediaQueries.sm`padding-top: 110px;`}
  ${MediaQueries.md`padding-top: 150px;`}
  ${MediaQueries.lg`padding-top: 180px;`}
  h1,
  h2 {
    font-weight: 700;
    ${MediaQueries.xs`margin-bottom: 30px;`}
    ${MediaQueries.sm`margin-bottom: 40px;`}
    ${MediaQueries.md`margin-bottom: 50px;`}
    ${MediaQueries.lg`margin-bottom: 60px;`}
  }
  .container {
    > .row {
        ${MediaQueries.xs`margin-bottom: 60px;`}
        ${MediaQueries.sm`margin-bottom: 70px;`}
        ${MediaQueries.md`margin-bottom: 80px;`}
        ${MediaQueries.lg`margin-bottom: 90px;`}
      p {
        ${MediaQueries.xs`font-size: 16px;`}
        ${MediaQueries.sm`font-size: 18px;`}
        ${MediaQueries.md`font-size: 20px;`}
        ${MediaQueries.lg`font-size: 25px;`}
      }
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  > div {
    border: 2px solid #fff;
    border-radius: 10px;
  }
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

        <AboutSection>
          <Container>
            <Row>
              <Col>
                <h1 className="text-primary">Hello,</h1>
                <p>
                  We are a full service multimedia & technology brand, and we’re ready to provide
                  you with everything you need, in terms of creativity.
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
