import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';
import { SettingsNav } from '../components';

import Form from './components/Form';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const UsersAdd = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Add User</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SettingsNav />
        <Section className="bordered">
          <Row>
            <Col xs={12} sm={7} md={6}>
              <ErrorBoundary>
                <Form />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default UsersAdd;
