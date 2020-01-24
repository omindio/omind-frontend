/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';
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

const CookiePolicy = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Omind. Where you ideals evolve into products.</title>
      </Helmet>

      <Header.Public color="black" />

      <Section>
        <Container>
          <Row>
            <Col>
              <h1 className="text-primary">Cookies Policy.</h1>
              <h2>What are Cookies</h2>
              <p>
                As is common practice with almost all professional websites this site uses cookies,
                which are tiny files that are downloaded to your computer, to improve your
                experience. This page describes what information they gather, how we use it and why
                we sometimes need to store these cookies. We will also share how you can prevent
                these cookies from being stored however this may downgrade or 'break' certain
                elements of the sites functionality.
              </p>
              <p>
                For more general information on cookies see the Wikipedia article on HTTP Cookies.
              </p>
              <h2>How we use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately in most cases
                there are no industry standard options for disabling cookies without completely
                disabling the functionality and features they add to this site. It is recommended
                that you leave on all cookies if you are not sure whether you need them or not in
                case they are used to provide a service that you use.
              </p>
              <h2>Disabling Cookies</h2>
              <p>
                You can prevent the setting of cookies by adjusting the settings on your browser
                (see your browser Help for how to do this). Be aware that disabling cookies will
                affect the functionality of this and many other websites that you visit. Disabling
                cookies will usually result in also disabling certain functionality and features of
                the this site. Therefore it is recommended that you do not disable cookies.
              </p>
              <h2>The Cookies we set</h2>
              <ul>
                <li>
                  <p>Site preferences cookies</p>
                  <p>
                    In order to provide you with a great experience on this site we provide the
                    functionality to set your preferences for how this site runs when you use it. In
                    order to remember your preferences we need to set cookies so that this
                    information can be called whenever you interact with a page is affected by your
                    preferences.
                  </p>
                </li>
              </ul>
              <h2>Third Party Cookies</h2>
              <p>
                In some special cases we also use cookies provided by trusted third parties. The
                following section details which third party cookies you might encounter through this
                site.
              </p>
              <ul>
                <li>
                  <p>
                    This site uses Google Analytics which is one of the most widespread and trusted
                    analytics solution on the web for helping us to understand how you use the site
                    and ways that we can improve your experience. These cookies may track things
                    such as how long you spend on the site and the pages that you visit so we can
                    continue to produce engaging content.
                  </p>
                  <p>
                    For more information on Google Analytics cookies, see the official Google
                    Analytics page.
                  </p>
                </li>

                <li>
                  <p>
                    The Google AdSense service we use to serve advertising uses a DoubleClick cookie
                    to serve more relevant ads across the web and limit the number of times that a
                    given ad is shown to you.
                  </p>
                  <p>
                    For more information on Google AdSense see the official Google AdSense privacy
                    FAQ.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Section>

      <ButtonNav />

      <Footer />
    </React.Fragment>
  );
};

export default CookiePolicy;
