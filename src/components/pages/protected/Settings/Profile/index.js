import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, Profile } from '@components/common';
import { ErrorBoundary } from '@utils/ErrorHandler';
import { getOneAction } from '@containers/User/GetOne';
import { profileAction } from '@containers/User/Profile';

import { SettingsNav } from '../components';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

class ProfilePage extends Component {
  componentDidMount() {
    const { fetch, userId } = this.props;
    fetch({ id: userId });
  }

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
          <title>Profile</title>
        </Helmet>

        <Header.Protected />
        <Container fluid="yes">
          <SettingsNav />
          <Section className="bordered">
            <Row>
              <Col xs={12} sm={7} md={6}>
                <ErrorBoundary>
                  <Profile.Form
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
    fetch: values => dispatch(getOneAction(values)),
    updateProfile: values => dispatch(profileAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
