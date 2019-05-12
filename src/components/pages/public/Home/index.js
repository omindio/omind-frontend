/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Omind - Home</title>
        </Helmet>
        <section className="bg-primary">
          <Container className="h-100 w-100">
            <Row className="h-100">
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
      </React.Fragment>
    );
  }
}

export default Home;
