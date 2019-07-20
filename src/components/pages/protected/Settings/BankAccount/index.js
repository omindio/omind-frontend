import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header, BankAccountForm, SectionNav } from '@components/common';
import { ErrorBoundary } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

// eslint-disable-next-line react/prefer-stateless-function
class BankAccount extends Component {
  render() {
    const { userId } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Bank Account. Settings</title>
        </Helmet>

        <Header.Protected />
        <Container fluid="yes">
          <SectionNav
            values={[
              { url: '/settings', name: 'Profile' },
              { url: '/settings/bank-account', name: 'Bank Account' },
            ]}
          />
          <Section className="shadow">
            <Row>
              <Col xs={12} sm={7} md={6}>
                <ErrorBoundary>
                  <BankAccountForm userId={userId} />
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

  return {
    userId: login.userId,
  };
};

export default connect(
  mapStateToProps,
  {},
)(BankAccount);
