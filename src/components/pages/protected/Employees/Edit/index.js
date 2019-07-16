import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, EmployeeProfileForm, SectionNav, UserVerification } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const EmployeesEdit = props => {
  const { employeeFetched, isFetchingData, match, isUpdated, employeeUpdated } = props;

  const { id } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>Edit. Employees</title>
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
                <EmployeeProfileForm employeeId={id} />
              </ErrorBoundary>
            </Col>
            <Col xs={12}>
              <ErrorBoundary>
                <UserVerification
                  isFetchingData={isFetchingData}
                  user={isUpdated ? employeeUpdated.user : employeeFetched.user}
                />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { getOne, update } = state.employee;

  return {
    employeeFetched: getOne.employee,
    isFetchingData: getOne.isFetching,
    isUpdated: update.success,
    employeeUpdated: update.employee,
  };
};

export default connect(
  mapStateToProps,
  {},
)(EmployeesEdit);
