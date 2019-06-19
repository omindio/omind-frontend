/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { LinkContainer } from 'react-router-bootstrap';

const CookieBanner = () => {
  return (
    <CookieConsent location="bottom" buttonText="Accept" cookieName="cookies_accept">
      This website uses cookies to provide you with a great user experience. To learn more about our
      use of cookies, please see our&nbsp;
      <LinkContainer to="/cookies-policy">
        <a>Cookies Policy</a>
      </LinkContainer>
      .
    </CookieConsent>
  );
};

export default CookieBanner;
