import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, SectionNav } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

import { Table } from './components';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const UsersTodo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Todo. Users</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SectionNav
          values={[{ url: '/users', name: 'Todo' }, { url: '/users/add', name: 'Add New' }]}
        />
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

export default UsersTodo;
