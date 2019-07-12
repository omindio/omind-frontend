import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, UserProfileForm, SectionNav } from '@components/common';
import { ErrorBoundary } from '@utils/ErrorHandler';
import { profileAction } from '@containers/Auth/Profile';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

class ProfilePage extends Component {
  componentDidUpdate() {
    const { isUpdated, updateProfile, userUpdated } = this.props;
    if (isUpdated) {
      const { name, lastName, email } = userUpdated;

      updateProfile({ name, lastName, email });
    }
  }

  render() {
    const {
      userId,
      isUpdated,
      userUpdated,
      userFetched,
      isFetchingData,
      fetchDataError,
    } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Profile. Settings</title>
        </Helmet>

        <Header.Protected />
        <Container fluid="yes">
          <SectionNav values={[{ url: '/settings', name: 'Profile' }]} />
          <Section className="shadow">
            <Row>
              <Col xs={12} sm={7} md={6}>
                <ErrorBoundary>
                  <UserProfileForm
                    userId={userId}
                    isUpdated={isUpdated}
                    userUpdated={userUpdated}
                    userFetched={userFetched}
                    isFetchingData={isFetchingData}
                    fetchDataError={fetchDataError}
                  />
                </ErrorBoundary>
              </Col>
            </Row>
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { login } = state.auth;
  const { update, getOne } = state.user;

  return {
    userId: login.userId,
    isUpdated: update.success,
    userUpdated: update.user,
    userFetched: getOne.user,
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: values => dispatch(profileAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
