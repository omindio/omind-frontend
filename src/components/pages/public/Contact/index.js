/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';

import { Container, Row, Col, Form, Button as ButtonBootsrap } from 'react-bootstrap';
import { Header, Footer, ButtonNav } from '@components/common';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #fffa94;
  h2 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Button = styled(ButtonBootsrap)`
  margin-top: 2.5rem;
  text-align: left;
  width: 100%;
  padding: 0.7rem 0.6rem;
  border-radius: 3px;
  height: auto !important;
`;

class Contact extends Component {
  render() {
    const isFetching = false;

    return (
      <React.Fragment>
        <Helmet>
          <title>Contact. Omind</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection className="contact">
          <Container>
            <Row>
              <Col xs={12} md={8} className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h2>Let&apos;s Talk</h2>
                <Formik
                  initialValues={{ name: '', email: '', subject: '', message: '' }}
                  validationSchema=""
                  onSubmit={values => {
                    console.log(values);
                  }}
                  render={({ values, handleSubmit, handleChange, touched, errors }) => (
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && errors.name}
                        placeholder="Name"
                        disabled={isFetching}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="name" component="span" />
                      </Form.Control.Feedback>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && errors.email}
                        placeholder="Email"
                        disabled={isFetching}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="email" component="span" />
                      </Form.Control.Feedback>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        isInvalid={touched.subject && errors.subject}
                        placeholder="Subject"
                        disabled={isFetching}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="subject" component="span" />
                      </Form.Control.Feedback>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        name="message"
                        value={values.subject}
                        onChange={handleChange}
                        isInvalid={touched.subject && errors.subject}
                        placeholder="Message"
                        disabled={isFetching}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="message" component="span" />
                      </Form.Control.Feedback>
                      <Button disabled={isFetching} type="submit">
                        {isFetching ? 'Wait...' : 'Sign in'}
                      </Button>
                    </Form>
                  )}
                />
              </Col>
            </Row>
          </Container>
        </HeaderSection>
        <ButtonNav exclude="contact" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
