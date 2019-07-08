/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

import { Header, Footer, ButtonNav, ImageLightboxCard } from '@components/common';
import movistarImg1 from './images/movistar/movistar1.jpeg';
import movistarImg2 from './images/movistar/movistar2.jpeg';
import movistarImg3 from './images/movistar/movistar3.jpeg';
import movistarImg4 from './images/movistar/movistar4.jpeg';
import movistarImg5 from './images/movistar/movistar5.jpeg';
import movistarImg6 from './images/movistar/movistar6.jpeg';

const HeaderSection = styled.section`
  overflow: hidden;
  height: 100vh;
  background-image: url(${movistarImg1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: rgba(255, 250, 148, 0.79);
    left: 0;
    top: 0;
    display: block;
  }

  h1 {
    margin-bottom: 3rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  span {
    background: #000;
    color: #fff;
    padding: 15px 23px;
    border-radius: 10px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
`;

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

const GalleryContainer = styled.div`
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

class InfoPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Business messaging admin panel movistar. Omind</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection>
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1>BUSINESS MESSAGING ADMIN PANEL MOVISTAR</h1>
                <TagsContainer>
                  <span>UI & UX</span>
                  <span>HTML</span>
                  <span>SASS</span>
                  <span>Javascript</span>
                </TagsContainer>
              </Col>
            </Row>
          </Container>
        </HeaderSection>

        <Section>
          <Container>
            <Row>
              <Col>
                <h2>Client</h2>
                <p>
                  <strong>
                    Uptiva is a technology services provider. This company is in charge of the
                    development and maintenance of Movistar’s business message service. Movistar is
                    the major telecommunications brand owned by Telefónica, operating in Spain and
                    in many Hispanic American countries. It is the largest mobile phone operator in
                    Spain.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Project Description</h2>
                <p>
                  Admin panel layout design for a business messaging platform. We developed a
                  usability study and the result is a innovative and functional layout composed of
                  useful elements that improve user experience such as graphics, tables, drop-down
                  menus and elegant pagination. Our new main goal was also to create a responsive
                  panel.
                </p>
              </Col>
            </Row>
          </Container>
        </Section>

        <section>
          <GalleryContainer>
            <ImageLightboxCard image={movistarImg2} />
            <ImageLightboxCard image={movistarImg3} />
            <ImageLightboxCard image={movistarImg4} />
            <ImageLightboxCard image={movistarImg5} />
            <ImageLightboxCard image={movistarImg6} />
          </GalleryContainer>
        </section>

        <ButtonNav />
        <Footer />
      </React.Fragment>
    );
  }
}

export default InfoPage;
