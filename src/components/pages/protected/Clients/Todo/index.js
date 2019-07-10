import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';
import { SettingsNav } from '../components';

import { Table } from './components';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const ClientsTodo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Todo. Clients</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SettingsNav />
        <Section className="shadow">
          <Row>
            <Col sm={12}>
              <ErrorBoundary>
                <Table />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default ClientsTodo;
