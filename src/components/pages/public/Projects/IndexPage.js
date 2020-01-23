import React from 'react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Header, Footer, ButtonNav, Loader } from '@components/common';

// import { Projects } from './components';
const Projects = React.lazy(() => import('./components/Projects'));

const HeaderSection = styled.section`
  overflow: hidden;
  background: #fff;
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

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Our Work. Omind</title>
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

      <section>
        <CardsContainer>
          <React.Suspense fallback={<Loader />}>
            <Projects />
          </React.Suspense>
        </CardsContainer>
      </section>

      <ButtonNav exclude="projects" />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
