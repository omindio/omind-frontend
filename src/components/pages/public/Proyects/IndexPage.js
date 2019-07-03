/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Header, Footer, ButtonNav, OverlayCard } from '@components/common';

import movistarImg from './images/movistar.jpeg';
import coverbarcelonaImg from './images/coverbarcelona.jpeg';
import gospelhumanityImg from './images/gospelhumanity.jpg';
import renesasImg from './images/renesas.jpg';
import skarabooImg from './images/skaraboo.jpg';
import stelarbookingImg from './images/stelarbooking.jpeg';
import viImg from './images/vi.jpeg';
import zingImg from './images/zing.jpg';
import thebarberlineImg from './images/thebarberline.jpeg';
import ibpImg from './images/ibp.jpeg';

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

class IndexPage extends Component {
  render() {
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
            <OverlayCard
              image={movistarImg}
              to="/proyects/proyect-title"
              title="UI, UX & Web Development - Movistar."
              alt=""
            />
            <OverlayCard
              image={skarabooImg}
              to="/proyects/proyect-title"
              title="Co-Founded - Creative Multimedia & Technology Studio."
              alt=""
            />
            <OverlayCard
              image={stelarbookingImg}
              to="/proyects/proyect-title"
              title="Co-Founded - International Booking Agency."
              alt=""
            />
            <OverlayCard
              image={viImg}
              to="/proyects/proyect-title"
              title="Demo product video - Motion Graphics."
              alt=""
            />
            <OverlayCard
              image={zingImg}
              to="/proyects/proyect-title"
              title="UI, UX & Web Development - Fintech."
              alt=""
            />
            <OverlayCard
              image={coverbarcelonaImg}
              to="/proyects/proyect-title"
              title="UI, UX & Web Development - E-Commerce."
              alt=""
            />
            <OverlayCard
              image={thebarberlineImg}
              to="/proyects/proyect-title"
              title="UI, UX & Web Development."
              alt=""
            />
            <OverlayCard
              image={gospelhumanityImg}
              to="/proyects/proyect-title"
              title="Non-for-profit Organization - ICO"
              alt=""
            />
            <OverlayCard
              image={renesasImg}
              to="/proyects/proyect-title"
              title="Demo product video - Motion Graphics."
              alt=""
            />
            <OverlayCard
              image={ibpImg}
              to="/proyects/proyect-title"
              title="Corporative Roll-ups, Design and Print."
              alt=""
            />
          </CardsContainer>
        </section>

        <ButtonNav exclude="proyects" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default IndexPage;