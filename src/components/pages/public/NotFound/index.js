import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { MediaQueries } from '@utils/Styles';
import { Header, Footer, ButtonNav } from '@components/common';

const Section = styled.section`

  ${MediaQueries.xs`padding-top: 90px;`}
  ${MediaQueries.sm`padding-top: 110px;`}
  ${MediaQueries.md`padding-top: 150px;`}
  ${MediaQueries.lg`padding-top: 180px;`}
  h1,
  h2 {
    font-weight: 700;
    ${MediaQueries.xs`margin-top:20px;margin-bottom: 10px;`}
    ${MediaQueries.sm`margin-top:30px;margin-bottom: 20px;`}
    ${MediaQueries.md`margin-top:40px;margin-bottom: 30px;`}
    ${MediaQueries.lg`margin-top:50px;margin-bottom: 40px;`}
  }
  .container {
    > .row {
      p {
        ${MediaQueries.xs`font-size: 16px;`}
        ${MediaQueries.sm`font-size: 18px;`}
        ${MediaQueries.md`font-size: 20px;`}
        ${MediaQueries.lg`font-size: 25px;`}
      }
    }
  }
`;

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found.</title>
    </Helmet>
    <Header.Public color="black" />

    <Section>
      <Container>
        <Row>
          <Col>
            <h1>Oops!</h1>
            <h2>Page not found.</h2>
          </Col>
        </Row>
      </Container>
    </Section>

    <ButtonNav />
    <Footer />
  </React.Fragment>
);

export default NotFound;
