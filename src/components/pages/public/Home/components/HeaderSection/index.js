import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const HeaderSection = styled.section`
  overflow: hidden;
  background: #0e1111;
`;

const HeaderSectionComponent = () => {
  return (
    <HeaderSection>
      <Container>
        <Row>
          <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
            <h1 className="text-secondary">
              Where your ideas
              <br />
              <strong>
                Evolve into
                <br />
                Products
                <span className="text-white">.</span>
              </strong>
            </h1>
          </Col>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default HeaderSectionComponent;
