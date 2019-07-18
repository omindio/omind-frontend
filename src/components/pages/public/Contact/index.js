/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import { actions, validationSchema } from '@containers/Contact';

import { Container, Alert, Row, Col, Form, Button as ButtonBootsrap } from 'react-bootstrap';
import { Header, Footer, ButtonNav } from '@components/common';
import { MediaQueries } from '@utils/Styles';
import { StateErrorHandler } from '@utils/ErrorHandler';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #fffa94;
  h2 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 15px;
  }
  p {
    ${MediaQueries.xs`font-size: 13px;`}
    ${MediaQueries.sm`font-size: 15px;`}
    ${MediaQueries.md`font-size: 17px;`}
    ${MediaQueries.lg`font-size: 20px;`}
  }
  .row {
    > div {
      &:first-child {
        ${MediaQueries.sm`height: 70vh !important;`}
        ${MediaQueries.md`height: 100vh !important;`}
      }
      &:last-child {
        ${MediaQueries.xs`padding-left: 15px; height: 40vh !important;`}
        ${MediaQueries.sm`height: 30vh !important;`}
        ${MediaQueries.md`padding-left: 6rem; height: 100vh !important;`}
      }
    }
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
  componentDidUpdate() {
    const { isSuccess, clear } = this.props;
    if (isSuccess) clear();
  }

  render() {
    const { isFetching, isSuccess, error, fields, send, isClearSuccess } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Contact. Omind</title>
        </Helmet>
        <Header.Public color="black" />

        <HeaderSection className="contact">
          <Container>
            <Row>
              <Col
                xs={12}
                sm={10}
                md={7}
                className="m-0 vh-100 d-flex flex-column justify-content-center"
              >
                <h2>Let&apos;s Talk.</h2>
                <Formik
                  initialValues={fields}
                  enableReinitialize
                  validationSchema={validationSchema}
                  onSubmit={values => {
                    send(values);
                  }}
                  render={({ values, handleSubmit, handleChange, touched, errors }) => (
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                      <StateErrorHandler error={error} />
                      <Alert show={isSuccess || isClearSuccess} key={0} variant="success">
                        Your message has been successfully sent.
                        <br />
                        We will respond as soon as possible.
                      </Alert>
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
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={touched.message && errors.message}
                        placeholder="Message"
                        disabled={isFetching}
                        autoComplete="off"
                      />
                      <Form.Control.Feedback type="invalid">
                        <ErrorMessage name="message" component="span" />
                      </Form.Control.Feedback>

                      <Button disabled={isFetching} type="submit">
                        {isFetching ? 'Wait...' : 'Send'}
                      </Button>
                    </Form>
                  )}
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={5}
                className="m-0 vh-100 d-flex flex-column justify-content-center"
              >
                <h3>Contact Email</h3>
                <p>omindbrand@gmail.com.</p>
                <h3>Headquarters</h3>
                <p>Barcelona, Spain.</p>
                <p>Ahmedabad, India.</p>
              </Col>
            </Row>
          </Container>
          <MessengerCustomerChat
            themeColor="#0e1111"
            pageId="676296672772129"
            appId="2430579140565039"
          />
        </HeaderSection>
        <ButtonNav exclude="contact" />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, success, error, fields, clearSuccess } = state.contact;
  return {
    isFetching,
    isSuccess: success,
    isClearSuccess: clearSuccess,
    error,
    fields,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    send: values => dispatch(actions.contactAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
