import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, ClientProfileForm, SectionNav, UserVerification } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const UsersEdit = props => {
  const { clientFetched, isFetchingData, match } = props;

  const { id } = match.params;
  const { user } = clientFetched;

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
            <Col xs={12}>
              <ErrorBoundary>
                <UserVerification isFetchingData={isFetchingData} user={user} />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { getOne } = state.client;

  return {
    clientFetched: getOne.client,
    isFetchingData: getOne.isFetching,
  };
};

export default connect(
  mapStateToProps,
  {},
)(UsersEdit);
