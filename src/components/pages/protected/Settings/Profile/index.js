import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Header } from '@components/common';

import { SettingsNav } from '../components';

import { Form } from './components';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const Profile = () => {
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
            <Col sm={5}>
              <Form />
            </Col>
          </Row>
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
