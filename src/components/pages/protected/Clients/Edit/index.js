import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import {
  Header,
  ClientProfileForm,
  SectionNav,
  UserVerification,
  BankAccountForm,
} from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const NavLink = styled(Nav.Link)`
  font-weight: 400;
  border-radius: 8px;
  color: #708498;
  &.active {
    background-color: #0f1111 !important;
    border: 0;
  }
  &:hover {
    border: 0;
    color: #0f1111;
  }
`;

const ClientsEdit = props => {
  const { clientFetched, isFetchingData, match, clientUpdated, isUpdated, isSuccessFetch } = props;

  const { id } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>Edit. Clients</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SectionNav
          values={[{ url: '/clients', name: 'Todo' }, { url: '/clients/add', name: 'Add New' }]}
        />
        <Section className="shadow">
          <Row>
            <Col>
              <Tab.Container id="left-tabs-example" defaultActiveKey="information">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <NavLink eventKey="information">Information</NavLink>
                      </Nav.Item>
                      <Nav.Item>
                        <NavLink eventKey="bankAccount">Bank Account</NavLink>
                      </Nav.Item>
                      <Nav.Item>
                        <NavLink eventKey="userVerification">User Verification</NavLink>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="information">
                        <ErrorBoundary>
                          <ClientProfileForm clientId={id} />
                        </ErrorBoundary>
                      </Tab.Pane>
                      <Tab.Pane eventKey="bankAccount">
                        {isSuccessFetch && (
                          <ErrorBoundary>
                            <BankAccountForm
                              userId={isUpdated ? clientUpdated.user.id : clientFetched.user.id}
                            />
                          </ErrorBoundary>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="userVerification">
                        <ErrorBoundary>
                          <UserVerification
                            isFetchingData={isFetchingData}
                            user={isUpdated ? clientUpdated.user : clientFetched.user}
                          />
                        </ErrorBoundary>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { getOne, update } = state.client;

  return {
    clientFetched: getOne.client,
    isFetchingData: getOne.isFetching,
    isSuccessFetch: getOne.success,
    isSuccess: update.success,
    clientUpdated: update.user,
  };
};

export default connect(mapStateToProps)(ClientsEdit);
