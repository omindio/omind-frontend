import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, Profile, SectionNav } from '@components/common';

import { ErrorBoundary } from '@utils/ErrorHandler';
import { getOneAction } from '@containers/User/GetOne';

import Verification from './components/Verification';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const UsersEdit = props => {
  const { isUpdated, userUpdated, userFetched, isFetchingData, fetchDataError, match } = props;

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
                <Profile.Form
                  userId={id}
                  isUpdated={isUpdated}
                  userUpdated={userUpdated}
                  userFetched={userFetched}
                  isFetchingData={isFetchingData}
                  fetchDataError={fetchDataError}
                />
              </ErrorBoundary>
            </Col>
            <Col xs={12} sm={7} md={6}>
              <ErrorBoundary>
                <Verification isFetchingData={isFetchingData} user={userFetched} />
              </ErrorBoundary>
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { update, getOne } = state.user;

  return {
    isUpdated: update.success,
    userUpdated: update.user,
    userFetched: getOne.user,
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: values => dispatch(getOneAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersEdit);
