import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

import ServiceCard from '../ServiceCard';
import services from '../ServiceCard/services';
import ValueCard from '../ValueCard';
import values from '../ValueCard/values';

const Section = styled.section`

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
    margin: 5px;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <h1 className="text-primary">Hello,</h1>
            <p>
              We are a team of professionals highly experienced in startup ecosystem. We offers
              full-fledged Techno-creative multimedia products and services as per your needs and
              flexibility.
            </p>
            <p>
              <strong>
                We execute the work in the most efficient manner that helps you to boost your reach
                to your prospects.
              </strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="text-primary">Our Expertise.</h2>
            <CardContainer className="services__container">
              {services.map(item => (
                <ServiceCard key={item.title} title={item.title} description={item.description} />
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
    </Section>
  );
};

export default AboutSection;
