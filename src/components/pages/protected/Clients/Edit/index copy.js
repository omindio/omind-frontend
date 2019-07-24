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

const ClientsEdit = props => {
  const { clientFetched, isFetchingData, match, clientUpdated, isUpdated, isSuccessFetch } = props;

  const { id } = match.params;
  console.log(isSuccessFetch);
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
            <Col xs={12}>
              <ErrorBoundary>
                <ClientProfileForm clientId={id} />
              </ErrorBoundary>
            </Col>
            <Col xs={12} sm={7} md={6}>
              {isSuccessFetch && (
                <ErrorBoundary>
                  <BankAccountForm
                    userId={isUpdated ? clientUpdated.user.id : clientFetched.user.id}
                  />
                </ErrorBoundary>
              )}
            </Col>
            <Col xs={12} sm={5} md={6}>
              <ErrorBoundary>
                <UserVerification
                  isFetchingData={isFetchingData}
                  user={isUpdated ? clientUpdated.user : clientFetched.user}
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
