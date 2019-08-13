/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { MediaQueries } from '@utils/Styles';

const Footer = styled.footer`
  ${MediaQueries.xs`padding-top:90px !important; padding: 0.8rem 2.2rem;`}
  ${MediaQueries.sm`padding-top:100px !important; padding: 0.9rem 2.2rem;`}
  ${MediaQueries.md`padding-top:180px !important; padding: 1rem 2.2rem;`}
  ${MediaQueries.lg`padding-top:200px !important; padding: 2.2rem;`}
  ${MediaQueries.xl`padding-top:200px !important; padding: 2.2rem;`}
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    ${MediaQueries.xs`margin:5px 0;`}
    ${MediaQueries.sm`margin:5px 0;`}
  }
  a {
    color: #0e1111;
    margin:0 5px;
    font-weight: 400;
    text-decoration: underline;
    svg {
      font-size: 1.3rem;
    }
    &:first-child {
      ${MediaQueries.xs`margin-left:0 !important;`}
    }
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Container fluid="true">
        <Row>
          <Col xs={12} sm={4}>
            <p className="text-left">
              © 2019 omind.io &nbsp;&nbsp;
              <NavLink to="/cookies-policy">Cookies Policy.</NavLink>
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <p className="text-xs-left text-sm-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                title="Omind Linkedin"
                href="https://www.linkedin.com/company/omind/"
              >
                <FaLinkedin />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                title="Omind Instagram"
                href="https://www.instagram.com/omind.io/"
              >
                <FaInstagram />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                title="Omind Facebook"
                href="https://www.facebook.com/omind.io/"
              >
                <FaFacebook />
              </a>
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <p className="text-xs-left text-sm-right">
              <strong>Born in Barcelona.</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
