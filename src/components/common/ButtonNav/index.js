/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

const ButtonsSection = styled.section`
  ${MediaQueries.xs`padding-top: 90px;`}
  ${MediaQueries.sm`padding-top: 110px;`}
  ${MediaQueries.md`padding-top: 150px;`}
  ${MediaQueries.lg`padding-top: 180px;`}
  h1,
  h2 {
    font-weight: 700;
    ${MediaQueries.xs`margin-bottom: 30px;`}
    ${MediaQueries.sm`margin-bottom: 40px;`}
    ${MediaQueries.md`margin-bottom: 50px;`}
    ${MediaQueries.lg`margin-bottom: 60px;`}
  }
  .container {
    > .row {
        ${MediaQueries.xs`margin-bottom: 60px;`}
        ${MediaQueries.sm`margin-bottom: 70px;`}
        ${MediaQueries.md`margin-bottom: 80px;`}
        ${MediaQueries.lg`margin-bottom: 90px;`}
      .btn {
        margin-right: 20px;
        border-color: #fffa94;
        border-width: 5px;
        padding: 10px 35px;
        ${MediaQueries.xs`font-size: 16px; display:block; margin-bottom: 20px;`}
        ${MediaQueries.sm`font-size: 18px; display: inline-block;`}
        ${MediaQueries.md`font-size: 20px;`}
        ${MediaQueries.lg`font-size: 25px;`}
        &:hover {
          border-color: #0e1111;
          background: #0e1111 !important;
          color: #fff !important;
        }
        &.active {
          background: transparent;
          color: #0e1111;
        }
      }
    }
`;

const ButtonNav = props => {
  const { exclude } = props;
  return (
    <ButtonsSection>
      <Container>
        <Row>
          <Col>
            <h1 className="text-primary">Let's see.</h1>
            {exclude !== 'about' && (
              <LinkContainer exact to="/">
                <Button variant="outline-primary">About</Button>
              </LinkContainer>
            )}
            {exclude !== 'projects' && (
              <LinkContainer to="/our-work">
                <Button variant="outline-primary">Projects</Button>
              </LinkContainer>
            )}
            {exclude !== 'products' && (
              <LinkContainer to="/products">
                <Button variant="outline-primary">Products</Button>
              </LinkContainer>
            )}
            {exclude !== 'contact' && (
              <LinkContainer to="/contact">
                <Button variant="outline-primary">Contact</Button>
              </LinkContainer>
            )}
          </Col>
        </Row>
      </Container>
    </ButtonsSection>
  );
};

export default ButtonNav;
