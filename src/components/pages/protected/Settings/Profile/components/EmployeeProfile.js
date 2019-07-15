import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, EmployeeProfileForm, SectionNav } from '@components/common';
import { ErrorBoundary } from '@utils/ErrorHandler';
import { profileAction } from '@containers/Auth/Profile';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

class ProfilePage extends Component {
  componentDidUpdate() {
    const { isUpdated, updateProfile, employeeUpdated } = this.props;
    if (isUpdated) {
      const { user } = employeeUpdated;
      const { name, lastName, email } = user;

      updateProfile({ name, lastName, email });
    }
  }

  render() {
    const { employeeId } = this.props;

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
              <Col xs={12}>
                <ErrorBoundary>
                  <EmployeeProfileForm employeeId={employeeId} />
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
  const { update } = state.employee;
  const { success, employee } = update;

  return {
    employeeId: login.employeeId,
    isUpdated: success,
    employeeUpdated: employee,
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
