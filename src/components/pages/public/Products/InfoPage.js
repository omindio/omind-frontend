/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

import { Header, Footer, ButtonNav, ImageLightboxCard } from '@components/common';
import nomadcoworkImg from './images/nomadcowork.jpg';

// background-image: url(${nomadcoworkImg});
const HeaderSection = styled.section`
  overflow: hidden;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100vh;
    width: auto;
    height: auto;
    z-index: -1;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

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
          <title>Nomad Cowork. Omind</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection>
          <video playsinline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1>Nomad Cowork</h1>
                <TagsContainer>
                  <span>React</span>
                  <span>Redux</span>
                  <span>React Native</span>
                  <span>Node</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                </TagsContainer>
              </Col>
            </Row>
          </Container>
        </HeaderSection>

        <Section>
          <Container>
            <Row>
              <Col>
                <h2>Product Description</h2>
                <p>TO DO.</p>
              </Col>
            </Row>
          </Container>
        </Section>

        <section>
          <GalleryContainer>
            <ImageLightboxCard image={nomadcoworkImg} />
          </GalleryContainer>
        </section>

        <ButtonNav />
        <Footer />
      </React.Fragment>
    );
  }
}

export default InfoPage;
