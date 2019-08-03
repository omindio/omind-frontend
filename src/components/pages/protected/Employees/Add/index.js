import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, SectionNav } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

import Form from './components/Form';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const EmployeesAdd = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Add. Employees</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SectionNav
          values={[{ url: '/employees', name: 'Todo' }, { url: '/employees/add', name: 'Add New' }]}
        />
        <Section className="shadow">
          <Row>
            <Col xs={12}>
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

export default EmployeesAdd;
