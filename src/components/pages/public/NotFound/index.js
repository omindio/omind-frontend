import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import { Header } from '@components/common';

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>Page Not Found.</title>
    </Helmet>
    <Header.Public color="black" />

    <section className="bg-white">
      <Container className="h-100 w-100">
        <Row className="h-100">
          <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
            <h1 className="text-primary">Oops!</h1>
            <h3 className="text-primary">Page not found.</h3>
          </Col>
        </Row>
      </Container>
    </section>
  </React.Fragment>
);

export default NotFound;
