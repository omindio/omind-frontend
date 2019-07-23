import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Header,
  // EmployeeProfileForm,
  SectionNav,
  // UserVerification,
  // BankAccountForm,
} from '@components/common';

// import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const ProjectsEdit = props => {
  console.log(props);

  // const { id } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>Edit. Projects</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SectionNav
          values={[{ url: '/projects', name: 'Todo' }, { url: '/projects/add', name: 'Add New' }]}
        />
        <Section className="shadow">
          <Row>
            <Col>
              <Nav fill variant="tabs" defaultActiveKey="information">
                <Nav.Item>
                  <Nav.Link eventKey="information">Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="images">Images</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="videos">Videos</Nav.Link>
                </Nav.Item>
              </Nav>
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
    isSuccessFetch: getOne.success,
    isUpdated: update.success,
    employeeUpdated: update.employee,
  };
};

export default connect(mapStateToProps)(ProjectsEdit);
