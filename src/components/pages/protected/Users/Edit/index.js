import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, UserProfileForm, SectionNav, UserVerification } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const UsersEdit = props => {
  const { userFetched, isFetchingData, match } = props;

  const { id } = match.params;

  return (
    <React.Fragment>
      <Helmet>
        <title>Edit. Users</title>
      </Helmet>

      <Header.Protected />
      <Container fluid="yes">
        <SectionNav
          values={[{ url: '/users', name: 'Todo' }, { url: '/users/add', name: 'Add New' }]}
        />
        <Section className="shadow">
          <Row>
            <Col xs={12} sm={7} md={6}>
              <ErrorBoundary>
                <UserProfileForm userId={id} />
              </ErrorBoundary>
            </Col>
            <Col xs={12} sm={7} md={6}>
              <ErrorBoundary>
                <UserVerification isFetchingData={isFetchingData} user={userFetched} />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { getOne } = state.user;

  return {
    userFetched: getOne.user,
    isFetchingData: getOne.isFetching,
  };
};

export default connect(
  mapStateToProps,
  {},
)(UsersEdit);
